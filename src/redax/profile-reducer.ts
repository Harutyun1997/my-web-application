import {ProfileAPI} from "../api/api";
import {postDataType, userDataType} from "../type/alll-type";
// import {reset} from 'redux-form';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";


let postData = [
    {id: 1, name: "Sargis", text: "Hello what do you do"},
    {id: 2, name: "Liana", text: "Hi, things are very good"},
    {id: 3, name: "Mat", text: "Why you"},
];


let initialState = {
    postData: postData as postDataType[],
    userData: [] as userDataType | [],
};
type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            //JSON.parse(localStorage.getItem('userData')).name
            let newPost = {
                id: action.id ? action.id : 4,
                name: action.name ? action.name : 'Guest',
                text: action.message
            };
            //let state2 = Object.create(state);
            return {...state, postData: [...state.postData, newPost]};
        }

        case SET_USER_PROFILE: {
            return {...state, userData: action.user};
        }

        case DELETE_POST: {
            return {...state, postData: state.postData.filter(p => p.id !== action.id)};
        }
        case SET_STATUS: {
            return {...state, userData: action.user};
        }
        default :
            return state;
    }
};
// type addPostActionCreatorType = {
//     type: typeof ADD_POST,
//     name: string,
//     message: string
// }

type addPostActionCreatorType = {
    type: typeof ADD_POST
    message: string
    name: string
}

export const addPostActionCreator = (message: string, name: string): addPostActionCreatorType => ({
    type: ADD_POST,
    message,
    name
});

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    user: any
}
export const setUserProfile = (user: any): setUserProfileActionType =>
    ({type: SET_USER_PROFILE, user});


type deletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id: number): deletePostActionType =>
    ({type: DELETE_POST, id: id});

export const getUserThunkCreator = (userID: number) => {
    return (dispatch: any) => {
        //  dispatch(toggleIsFetching(true));
        ProfileAPI.getUser(userID).then((data: any) => {
            dispatch(setUserProfile(data));
            // dispatch(toggleIsFetching(false));
        }).catch((err: any) => console.log(err));

    }
};

export const updateStatus = (status: string, userData: any) => async (dispatch: any) => {
    try {
        userData = JSON.parse((localStorage.getItem('userData')as string));
        userData['status'] = status;
        let user = await ProfileAPI.updateStatus(userData.id, userData);
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(user));
        dispatch(setUserProfile(user));
    }
    catch (error) {
        console.log(error.response);
        debugger
    }
};

export const saveData = (userData: any) => async (dispatch: any) => {
    //  dispatch(toggleIsFetching(true));
    let user = await ProfileAPI.updateStatus(userData.id, userData);
    localStorage.clear();
    localStorage.setItem('userData', JSON.stringify(user));
    dispatch(setUserProfile(user));
    //  dispatch(reset('userData'));  // requires form name

    // dispatch(toggleIsFetching(false));
};

export const updatePhoto = (photo: any, userData: any) => async (dispatch: any) => {
    //  dispatch(toggleIsFetching(true));
    debugger;
    let upadteImageUser = await ProfileAPI.savePhoto(photo);
    console.log(upadteImageUser);

    userData['src'] = photo['name'];
    let user = await ProfileAPI.updateStatus(userData.id, userData);
    localStorage.clear();
    localStorage.setItem('userData', JSON.stringify(user));
    dispatch(setUserProfile(user));
    // dispatch(toggleIsFetching(false));
};

export default profileReducer;
