/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redax/redux-store'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


setInterval(() => {
    store.dispatch({type: "FAKE"})
}, 1000);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>;
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// renderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import {createStore} from 'redux';
// import {addMessage} from "./redax/state";
//
// function playStore(state = [], action) {
//     if (action.type === 'ADD_TRACK') {
//     return[
//         ...state,action.payload
//     ]
//     }
//     return state;
// }
//
//
// const store = createStore(playStore);
//
// store.subscribe(() => {
//     console.log(store.getState());
//
// });
//
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: addMessage,
// });
//
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: '',
// });