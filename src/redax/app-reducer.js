import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS ";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
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


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAPP = () =>
    (dispatch) => {
        dispatch(getAuthUserData());

        dispatch(initializedSuccess());

    };

export default appReducer;