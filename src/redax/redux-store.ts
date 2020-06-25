// import {combineReducers, createStore} from 'redux';
// import prifileReducer from './profile-reducer.ts';
// import messagesReducer from "./messages-reducer";
//
// let reducers = combineReducers({
//     profilePage: prifileReducer,
//     messagesPage: messagesReducer,
// });
// let store = createStore(reducers);
//
// export default store;
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
// import session from "./Session";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    // localSession: session,
    form: formReducer
});
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window._store_ = store;

export default store;