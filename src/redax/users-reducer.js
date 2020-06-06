import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOWERS = "UNFOLLOWERS";
const SHOW_MORE = 'SHOW-MORE';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const CHANGE_PAGE = 'CHANGE-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAKE":
            return {...state, fake: state.fake + 1};
        case FOLLOW :
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOWERS:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };

        case SHOW_MORE: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.page}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state;
    }
};


export const setUsers = (users) => ({type: SET_USERS, users});
export const showMore = (users) => ({type: SHOW_MORE, users});
export const addFollow = (id) => ({type: FOLLOW, id});
export const removeFollow = (id) => ({type: UNFOLLOWERS, id});
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const changePage = (page) => ({type: CHANGE_PAGE, page});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersMoreThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(showMore(response.data));
            dispatch(changePage(currentPage));
            dispatch(toggleIsFetching(false));

        }).catch(err => console.log(err));

    }
};
export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            console.log(response);
            dispatch(changePage(currentPage));
            dispatch(setUsers(response.data));
            dispatch(setUsersCount(Number(response.headers['x-total-count'])));
            dispatch(toggleIsFetching(false));

        }).catch(err => console.log(err));

    }
}


export const followThunkCreator = (id, userDataId, userData) => {

    return (dispatch) => {
        userData.followed[id] = true;
        dispatch(toggleFollowingProgress(true, id));
        userAPI.toggleFollow(userDataId, userData).then(response => {
            localStorage.clear();
            localStorage.setItem('userData', JSON.stringify(userData));
            dispatch(toggleFollowingProgress(false, id));
            dispatch(addFollow(id));
        }).catch(err => console.log(err));

    }
}

export const removeFollowThunkCreator = (id, userDataId, userData) => {

    return (dispatch) => {
        userData.followed[id] = false;
        dispatch(toggleFollowingProgress(true, id));
        userAPI.toggleFollow(userDataId, userData).then(response => {
            localStorage.clear();
            localStorage.setItem('userData', JSON.stringify(userData));
            dispatch(toggleFollowingProgress(false, id));
            dispatch(removeFollow(id));
        }).catch(err => console.log(err));
    }
}
export default usersReducer;