import {Login} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const ERROR_SIGN_IN = "ERROR_SIGN_IN";
const UPDATE_EMAIL_TEXT = "UPDATE_EMAIL_TEXT";
const UPDATE_PASSWORD_TEXT = "UPDATE_PASSWORD_TEXT";

type AddressType = {
    city?: string | null
    country: string | null
}

let initialState = {
    id: null as number | null,
    name: null as string | null,
    email: null as string | null,
    password: null as string | number | null,
    age: null as number | null,
    location: {
        country: null  as string | null,
        city: null as string | null
    },
    status: null as string | null,
    src: "" as string | null,
    followed: null as string | null,
    isAuth: false as boolean | null,
    error: false as boolean | string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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
            return {...state, isAuth: false};

        default :
            return state;
    }
};

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    user: object
}
export const setAuthUserData = (user: object): setAuthUserDataActionType => ({type: SET_USER_DATA, user: user});

type signInActionType = {
    type: typeof SIGN_IN,
    user: object
}
type signOutActionType = {
    type: typeof SIGN_OUT
}
type updateEmailTextActionType = {
    type: typeof UPDATE_EMAIL_TEXT
    email: string
}
type errorSignInActionType = {
    type: typeof ERROR_SIGN_IN,

}

export const signIn = (user: any): signInActionType => ({type: SIGN_IN, user: user});

export const signOut = (): signOutActionType => ({type: SIGN_OUT});

export const errorSignIn = (): errorSignInActionType => ({type: ERROR_SIGN_IN});

export const updateEmailText = (text: string): updateEmailTextActionType =>
    ({type: UPDATE_EMAIL_TEXT, email: text});

export const updatePasswordText = (text: string) =>
    ({type: UPDATE_PASSWORD_TEXT, password: text});

export const getAuthUserData = () => (dispatch: any) => {
    let userData = JSON.parse(window.localStorage.getItem('userData') as any);
    if (userData) {
        dispatch(setAuthUserData(userData));
    }
    return userData;

};
export const sigInAccount = (email: string, password: any) => async (dispatch: any) => {
    if (!( email !== null && password !== null && email.trim().length > 4 && password.trim().length > 2)) {
        dispatch(errorSignIn());
        return false;
    }
    let data = await Login.sigIn(email, password);
    console.log(data);
    if (data.length > 0) {
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(data[0]));
        dispatch(signIn(data[0]));
    }
    else {
        dispatch(errorSignIn());
    }
};

export const sigUpAccount = (data: any) => {
    return (dispatch: any) => {
        data['name'] = data['firstName'] + ' ' + data['lastName'];
        data['location'] = {};
        data['location']['country'] = data['country'];
        data['location']['city'] = data['city'];
        data['status'] = "Tell us about yourself";
        data['src'] = '';
        data['followed'] = {};

        Login.sigUp(data).then((data: any) => {
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
        }).catch((err: any) => console.log(err));
    }
};

export const signOutAccount = () => {
    return (dispatch: any) => {
        localStorage.clear();
        dispatch(signOut());
    }
};

export default authReducer;