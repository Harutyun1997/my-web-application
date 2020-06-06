import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./users-reducer";

let userData = {
    name: 'Arsen',
    age: 45,
    city: 'Armenia',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'
};

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
let dialogsData = [
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
];
let messageData = [
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
];

let store = {
    _state: {
        profilePage: {
            postData: postData,
            userData: userData,
            newPostText: ''
        },
        messagesPage: {
            dialogsData: dialogsData,
            messageData: messageData,
            userData: userData,
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    localStorageData() {
        let data = JSON.parse(localStorage.getItem('localState'));
        if (data) {
            this._state = data;
        }

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        localStorage.clear();
        localStorage.setItem('localState', JSON.stringify(this._state));

        this._callSubscriber(this._state);
    }
};


store.localStorageData();

export default store;
