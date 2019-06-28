
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redax/state'
import {BrowserRouter} from 'react-router-dom';


export let renderEntireTree = () => {
    console.log(state);
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}/>;
        </BrowserRouter>, document.getElementById('root'))
};

renderEntireTree();

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