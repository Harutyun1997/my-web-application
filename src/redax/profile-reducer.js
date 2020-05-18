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


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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

let initialState = {
    postData: postData,
    userData: userData,
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT : {
            let state2 = Object.create(state);
            state2.newPostText = action.newText;
            return state2;
        }
        case ADD_POST: {
            let newPost = {
                name: state.userData.name,
                text: state.newPostText
            };
            let state2 = Object.create(state);

            state2.newPostText = '';
            state2.postData.push(newPost);
            return state2;
        }
        default :
            return state;
    }
};

export const addPostActionCreator = () =>
    ({type: ADD_POST});

export const updatePostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
