import {userAPI} from "../api/api";
import {updateObjInArray} from "../utils/object-helpers";
import {userDataType} from "../type/alll-type";

const FOLLOW = "FOLLOW";
const UNFOLLOWERS = "UNFOLLOWERS";
const SHOW_MORE = 'SHOW-MORE';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const CHANGE_PAGE = 'CHANGE-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as userDataType[],
    pageSize: 3 as number,
    totalUsersCount: 0 as   number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>,//array of user ids
};

type  initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case FOLLOW :
            return {...state, users: updateObjInArray(state.users, action.id, 'id', {followed: true})};
        case UNFOLLOWERS:

            return {...state, users: updateObjInArray(state.users, action.id, 'id', {followed: false})};


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
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
};


type ActionsType = setUsersType | showMoreType | addFollowType | removeFollowType
    | setUsersCountType | changePageType | toggleIsFetchingType | toggleFollowingProgressType;
type setUsersType = {
    type: typeof SET_USERS
    users: userDataType[]
}
type showMoreType = {
    type: typeof SHOW_MORE
    users: userDataType[]
}
type addFollowType = {
    type: typeof FOLLOW
    id: number
}
type removeFollowType = {
    type: typeof UNFOLLOWERS
    id: number
}
type setUsersCountType = {
    type: typeof SET_USERS_COUNT
    usersCount: number
}
type changePageType = {
    type: typeof CHANGE_PAGE
    page: number
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}


export const setUsers = (users: userDataType[]): setUsersType => ({type: SET_USERS, users});
export const showMore = (users: userDataType[]): showMoreType => ({type: SHOW_MORE, users});
export const addFollow = (id: number): addFollowType => ({type: FOLLOW, id});
export const removeFollow = (id: number): removeFollowType => ({type: UNFOLLOWERS, id});
export const setUsersCount = (usersCount: number): setUsersCountType => ({type: SET_USERS_COUNT, usersCount});
export const changePage = (page: number): changePageType => ({type: CHANGE_PAGE, page});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersMoreThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(showMore(response.data));
    dispatch(changePage(currentPage));
    dispatch(toggleIsFetching(false));
};
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then((response: any) => {
            console.log(response);
            dispatch(changePage(currentPage));
            dispatch(setUsers(response.data));
            dispatch(setUsersCount(Number(response.headers['x-total-count'])));
            dispatch(toggleIsFetching(false));

        }).catch((err: any) => console.log(err));
    }
};

let a;
if ('sass') {

}


const followUnFollowFlow = async (dispatch: any, id: number, userDataId: number, userData: userDataType[], actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, id));
    let response = await userAPI.toggleFollow(userDataId, userData);
    if (response) {
        dispatch(actionCreator(id));
    }
    localStorage.clear();
    localStorage.setItem('userData', JSON.stringify(userData));
    dispatch(toggleFollowingProgress(false, id));
};

export const followThunkCreator = (id: number, userDataId: number, userData: any) => async (dispatch: any) => {
    userData.followed[id] = true;
    followUnFollowFlow(dispatch, id, userDataId, userData, addFollow);
};

export const removeFollowThunkCreator = (id: number, userDataId: number, userData: any) => async (dispatch: any) => {
    userData.followed[id] = false;
    followUnFollowFlow(dispatch, id, userDataId, userData, removeFollow);
};
export default usersReducer;