import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS ";

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
};

type GetTasksActionType = {
    type: typeof INITIALIZED_SUCCESS
}
// let actionType: GetTasksActionType = {
//     type: INITIALIZED_SUCCESS
// };

const appReducer = (state = initialState, action: GetTasksActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            // let user = JSON.parse(localStorage.getItem('userData'));
            return {
                ...state,
                initialized: true,
            };

        default :
            return state;
    }
};

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeAPP = () =>
    (dispatch: any) => {
        dispatch(getAuthUserData());
        dispatch(initializedSuccess());

    };

export default appReducer;