import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm: FC = () => {
    const [username, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={username}
                id="username"
                name="username"
                type="text"
                placeholder='username'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.login(username, password)}>
                Логин
            </button>
            <button onClick={() => store.registration(username, password)}>
                Регистрация
            </button>
                <button type="submit" className="btn">Войти</button>
        </div>
    /*<div>
        <form action="http://localhost:8080/token" method="POST">
            <input
                onChange={e => setEmail(e.target.value)}
                value={username}
                id="username"
                name="username"
                type="text"
                placeholder='username'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.login(username, password)}>
                Логин
            </button>
            <button onClick={() => store.registration(username, password)}>
                Регистрация
            </button>
            <button type="submit" className="btn">Войти</button>
        </form>
    </div>*/
    );
};

export default observer(LoginForm);