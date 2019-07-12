import {renderEntireTree} from "../index";

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

let state = {
    profilePage: {
        userData: userData,
        postData: postData
    },
    messagesPage: {
        dialogsData: dialogsData,
        messageData: messageData
    }
};
export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        name: userData.name,
        text: postMessage
    };
    localStorage.clear();
    state.profilePage.postData.push(newPost);
    localStorage.setItem('data', JSON.stringify(state));
    renderEntireTree();
};

export let localStorageData = () => {
    debugger;
    let data = JSON.parse(localStorage.getItem('data'));
    if (data) {
        state = data;
    }

};

export let addMessage = (message) => {
    let newMessage = {
        name: userData.name,
        message: message,
        src: userData.src
    };
    localStorage.clear();
    state.messagesPage.messageData.push(newMessage);
    localStorage.setItem('data', JSON.stringify(state));
    renderEntireTree();
};

localStorageData();

export default state;
