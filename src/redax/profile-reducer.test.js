import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer.ts";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let state = {
    postData: [
        {id: 1, name: "Sargis", text: "Hello what do you do"},
        {id: 2, name: "Liana", text: "Hi, things are very good"},
        {id: 3, name: "Mat", text: "Why you"},
    ]
};


it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('New post', 'Harut');
//2 action
    let newState = profileReducer(state, action);
    //3 expectation
    expect(newState.postData.length).toBe(4);
});

it('message  of new  posts should be correct', () => {
    //1. test data
    let action = addPostActionCreator('Harut');

//2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.postData[3].text).toBe('Harut');
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

//2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.postData.length).toBe(2);
});

it(`after deleting length should'n be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);

//2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.postData.length).toBe(3);
});
