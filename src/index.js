import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App store={store}/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
