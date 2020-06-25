const SET_LOCAL_SESSION = 'SET_LOCAL_SESSION';
const session = (state = [], action) => {

    if (action === 'SET_LOCAL_SESSION') {
        let user = JSON.parse(localStorage.getItem('userData'));
        if (user) {
            state = user;
        }
    }
    return state;
};

export const setLocalSession = () =>
    ({type: SET_LOCAL_SESSION});
export default session;