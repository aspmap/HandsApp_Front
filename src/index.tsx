import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./store/store";
import {render} from "@testing-library/react";

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    console.log(store.user.username)
    root.render(
        <Context.Provider value={{
            store
        }}>
            <App />
        </Context.Provider>,
    );
}

