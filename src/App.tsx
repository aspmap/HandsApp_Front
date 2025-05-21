import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('basic')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm/>
                <button onClick={getUsers}>Посмотреть посты</button>
            </div>
        );
    }

    return (
        <div>{/* <h1>{store.isAuth ? `Пользователь авторизован ${store.user.username}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>*/}
            <button onClick={() => store.logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>Посмотреть посты</button>
            </div>
            <div>
                <h1>Посты:</h1>
                <table>
                    <tr>
                        <th>ID поста</th>
                        <th>Текст</th>
                        <th>Фото</th>
                        <th>Дата поста</th>
                    </tr>
                    <tr>
                        <td>{users.map(user =>
                            <div key={user.postId}> {user.postId}</div>)}</td>
                        <td>{users.map(user =>
                            <div key={user.content}> {user.content}</div>)}</td>
                        <td>
                            {users.map(user =>
                                <div key={user.photo}> {user.photo}</div>)}
                            {/*{users.map(user => { return <img src= {user.photo} />})};*/}
                            {/*{users.map(user => {
                            return <div><img width="200px" height="200px"
                                        src={'https://localhost:8443/resources/img/users/' + localStorage.getItem("username") + '/' + user.photo}/></div>
                        })};*/}
                        </td>
                        <td>{users.map(user =>
                            <div key={user.createdAt}> {user.createdAt}</div>)}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default observer(App);