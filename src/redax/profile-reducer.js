const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
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
    ],
    newPostText: [
        {
            name: 'Arsen',
            age: 45,
            city: 'Armenia',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'
        }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: "Harut",
                text: state.newPostText,
                likesCount: 0
            };
            localStorage.clear();
            state.posts.push(newPost);
            state.newPostText = '';
            localStorage.setItem('data', JSON.stringify(state));
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;