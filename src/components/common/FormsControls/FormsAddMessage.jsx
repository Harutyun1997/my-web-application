import React from 'react';
import {Field, reduxForm, reset} from "redux-form";

import {Textarea} from "./FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from './FormsControls.module.css';

const maxLength = maxLengthCreator(10);

const afterSubmit = (result, dispatch) =>
    dispatch(reset('myPostMessage'));

const PostAddForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"message"} placeholder={"..."} component={Textarea} validate={[required, maxLength]}
               className=' col-9'
               rows="4"
               cols="130"/>
        <button className={`${s.btn_sent + ' btn btn-success col-2 col-lg-1 ml-2'}`}>Sent</button>
    </form>;

};
const FormPost = reduxForm({form: 'myPostMessage', onSubmitSuccess: afterSubmit})(PostAddForm);

export const AddMessageForm = (props) => {
    const createPost = (data) => {
        props.addMessage(data.message);
    };
    return (
        <div>
            <FormPost onSubmit={createPost}/>
        </div>
    )
};

