import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Field, reduxForm} from "redux-form";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SigUpForm = (props) => {
    const classes = useStyles();
    const maxLength = maxLengthCreator(30);

    return (
        <form onSubmit={props.handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="firstName"
                        placeholder="First Name"
                        autoFocus
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        variant="outlined"
                        fullWidth
                        name="lastName"
                        placeholder="lastName"
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field
                        variant="outlined"
                        fullWidth
                        name="country"
                        placeholder="Country"
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field
                        variant="outlined"
                        fullWidth
                        name="city"
                        placeholder="City"
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field
                        variant="outlined"
                        fullWidth
                        name="age"
                        placeholder="Age"
                        component={Input}
                        type={'number'}
                        className={'col-12 p-2'}
                        validate={[required]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        fullWidth
                        placeholder="Email Address"
                        name="email"
                        autoComplete="email"
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="current-password"
                        component={Input}
                        className={'col-12 p-2'}
                        validate={[required, maxLength]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <label for="sendInfoMail">I want to receive inspiration, marketing promotions and updates via
                        email.</label>
                    <Field
                        component={"input"} type={'checkbox'}
                        id={'sendInfoMail'} name={'sendInfoMail'}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <NavLink to="/login" variant="body2">
                        Already have an account? Sign in
                    </NavLink>
                </Grid>
            </Grid>
        </form>
    )
};

const SigUpReduxForm = reduxForm({
    form: 'sigUp'
})(SigUpForm);


export default function SignUp(props) {
    const classes = useStyles();

    const sinUp = (data) => {
        console.log(data);
        props.sigUpAccount(data);
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <SigUpReduxForm onSubmit={sinUp}/>

            </div>
        </Container>
    );
}