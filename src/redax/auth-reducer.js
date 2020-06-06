import {Login} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const ERROR_SIGN_IN = "ERROR_SIGN_IN";
const UPDATE_EMAIL_TEXT = "UPDATE_EMAIL_TEXT";
const UPDATE_PASSWORD_TEXT = "UPDATE_PASSWORD_TEXT";


let initialState = {
    id: null,
    name: null,
    email: null,
    password: null,
    age: null,
    location: {
        country: null,
        city: null
    },
    status: null,
    src: "",
    followed: null,
    isAuth: false,
    error: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // let user = JSON.parse(localStorage.getItem('userData'));
            return {
                ...state,
                ...action.user,
                isAuth: true,
            };

        case UPDATE_EMAIL_TEXT:
            return {...state, email: action.email};

        case UPDATE_PASSWORD_TEXT:
            return {...state, password: action.password};

        case ERROR_SIGN_IN:
            return {...state, error: 'ERROR'};
        case SIGN_IN:
            return {
                ...state,
                ...action.user,
                isAuth: true,
            };

        case SIGN_OUT:
            return {};

        default :
            return state;
    }
};


export const setAuthUserData = (user) => ({type: SET_USER_DATA, user: user});

export const signIn = (user) => ({type: SIGN_IN, user: user});

export const signOut = () => ({type: SIGN_OUT});

export const errorSignIn = () => ({type: ERROR_SIGN_IN});

export const updateEmailText = (text) =>
    ({type: UPDATE_EMAIL_TEXT, email: text});

export const updatePasswordText = (text) =>
    ({type: UPDATE_PASSWORD_TEXT, password: text});

export const getAuthUserData = () => (dispatch) => {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        dispatch(setAuthUserData(userData));
    }
    return userData;

};
export const sigInAccount = (email, password) => {
    return (dispatch) => {
        if (!( email !== null && password !== null && email.trim().length > 4 && password.trim().length > 2)) {
            dispatch(errorSignIn());
            return false;
        }
        Login.sigIn(email, password).then(data => {
            console.log(data);
            if (data.length > 0) {
                localStorage.clear();
                localStorage.setItem('userData', JSON.stringify(data[0]));
                dispatch(signIn(data[0]));
            }
            else {
                dispatch(errorSignIn());

            }
        }).catch(err => console.log(err));
    }
};
export const sigUpAccount = (data) => {
    return (dispatch) => {

        data['name'] = data['firstName'] + ' ' + data['lastName'];
        data['location'] = {};
        data['location']['country'] = data['country'];
        data['location']['city'] = data['city'];
        data['status'] = "Tell us about yourself";
        data['src'] = '';
        data['followed'] = {};

        Login.sigUp(data).then(data => {
            console.log(data);
            if (data) {
                localStorage.clear();
                localStorage.setItem('userData', JSON.stringify(data));
                dispatch(signIn(data));
            }
            else {
                alert('Error');
                return false;
            }
        }).catch(err => console.log(err));
    }
};

export const signOutAccount = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(signOut());
    }
};

export default authReducer;