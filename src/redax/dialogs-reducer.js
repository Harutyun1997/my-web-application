const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        {
            name: 'Nik',
            id: 1,
        },
        {
            name: 'Har',
            id: 2,
        },
        {
            name: 'Mon',
            id: 3,
        },
        {
            name: 'Mik',
            id: 4,
        },
        {
            name: 'Art',
            id: 5,
        },
        {
            name: 'Sam',
            id: 6,
        }
    ],
    messages: [
        {
            name: 'Mat',
            message: 'Hello Har what do you do',
            src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'
        },
        {
            name: 'My',
            message: 'Why do you not answer',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'
        },
        {
            name: 'Mat',
            message: 'Do you working tomorrow',
            src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'

        },
        {
            name: 'My',
            message: 'Because his car not working',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'

        },
        {
            name: 'Mat',
            message: 'My mother is not home',
            src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'

        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            localStorage.clear();
            state.newMessageBody = action.body;
            localStorage.setItem('data', JSON.stringify(state));
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;