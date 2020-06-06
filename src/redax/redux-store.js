// import {combineReducers, createStore} from 'redux';
// import prifileReducer from './profile-reducer';
// import messagesReducer from "./messages-reducer";
//
// let reducers = combineReducers({
//     profilePage: prifileReducer,
//     messagesPage: messagesReducer,
// });
// let store = createStore(reducers);
//
// export default store;
import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import session from "./Session";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    localSession: session,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store);
export default store;