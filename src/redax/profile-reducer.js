// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const profileReducter = (state, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             let newPost = {
//                 name: "Harut",
//                 text: state.newMessage
//             };
//             localStorage.clear();
//             state.postData.push(newPost);
//             state.newMessage = '';
//             localStorage.setItem('data', JSON.stringify(state));
//             return state;
//         case UPDATE_NEW_POST_TEXT:
//             state.newMessage = action.newText;
//
//         default:
//             return state;
//     }
// };
//
// export default profileReducter;


import {ProfileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let postData = [
    {
        name: "Sargis",
        text: "Hello what do you do"
    },
    {
        name: "Liana",
        text: "Hi, things are very good"
    },
    {
        name: "Mat",
        text: "Why you"
    },
];

let initialState = {
    postData: postData,
    userData: [],
};

const profileReducer = (state = initialState, action) => {
    let stateClone;
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                name: JSON.parse(localStorage.getItem('userData')).name,
                text: action.message
            };
            //let state2 = Object.create(state);
            stateClone = {...state, postData: [...state.postData, newPost]};
            return stateClone;
        }

        case SET_USER_PROFILE: {
            stateClone = {...state, userData: action.user};
            return stateClone;
        }
        case SET_STATUS: {
            stateClone = {...state, userData: action.user};
            return stateClone;
        }
        default :
            return state;
    }
};

export const addPostActionCreator = (message) => ({type: ADD_POST, message});

export const setUserProfile = (user) =>
    ({type: SET_USER_PROFILE, user});

export const setStatus = (user) =>
    ({type: SET_STATUS, user: user});

export const getUserThunkCreator = (userID) => {
    return (dispatch) => {
        //  dispatch(toggleIsFetching(true));
        ProfileAPI.getUser(userID).then(data => {
            dispatch(setUserProfile(data));
            // dispatch(toggleIsFetching(false));
        }).catch(err => console.log(err));

    }
};

export const updateStatus = (status, userData) => {
    return (dispatch) => {
        //  dispatch(toggleIsFetching(true));
        userData['status'] = status;
        ProfileAPI.updateStatus(userData.id, userData).then(user => {
            dispatch(setUserProfile(user));
            // dispatch(toggleIsFetching(false));
        }).catch(err => console.log(err));

    }
};

export default profileReducer;
