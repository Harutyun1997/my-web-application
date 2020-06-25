import React from 'react';
import s from './FormsControls.module.css';
import {Field} from "redux-form";


const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}> <input {...input} {...restProps}/></FormControl>)
};

export const createField = (placeholder, name, validators, component, type = 'text', value = '') => {
    return (
        <Field
            name={name}
            placeholder={placeholder}
            component={component}
            className={'col-12 p-2'}
            value={value}
            validate={validators}
            type={type}

        />);
};
