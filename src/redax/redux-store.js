import {combineReducers, createStore} from 'redux';
import prifileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilePage: prifileReducer,
    messagesPage: dialogsReducer,
});
let store = createStore(reducers);

export default store;
