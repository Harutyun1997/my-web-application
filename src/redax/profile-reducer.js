const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const profileReducter = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: "Harut",
                text: state.newMessage
            };
            localStorage.clear();
            state.postData.push(newPost);
            state.newMessage = '';
            localStorage.setItem('data', JSON.stringify(state));
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newMessage = action.newText;

        default:
            return state;
    }
};

export default profileReducter;