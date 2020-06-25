import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from "react-router-dom";
import {ReCaptcha} from 'react-recaptcha-google'


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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


// executed once the captcha has been verified
// can be used to post forms, redirect, etc.

export default function Login(props) {


    let [captchaDemo, setcaptchaDemo] = useState(0);

    const onLoadRecaptcha = () => {
        if (captchaDemo) {
            captchaDemo.reset();
            captchaDemo.execute();
        }
    };

    useEffect(() => {
        if (captchaDemo) {
            console.log("started, just a second...");
            captchaDemo.reset();
            captchaDemo.execute();
        }
    }, [captchaDemo]);

    const verifyCallback = (recaptchaToken) => {
        // Here you will get the final recaptchaToken!!!
        console.log(recaptchaToken, "<= your recaptcha token")
    };


    const executeCaptcha = function () {
        captchaDemo.execute('6Le3MKUZAAAAAKfIFRP5Z9Tie3504fC8bIOER2ZB', {action: 'submit'}).then(function (token) {
            // Add your logic to submit to your backend server here.
            console.log(token);
        });

    };


    const updateEmailText = (e) => {
        let text = e.target.value;
        props.updateEmailText(text);
    };
    const updatePasswordText = (e) => {
        let text = e.target.value;
        props.updatePasswordText(text);
    };

    const SignIn = () => {
        props.sigInAccount(props.email, props.password);
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={updateEmailText}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={updatePasswordText}
                        id="password"
                        autoComplete="current-password"
                    />
                    {props.error && <div className="alert alert-danger">
                        <strong>Wrong!</strong> Email or password wrong.
                    </div>
                    }
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={SignIn}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <NavLink to="sign-up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div>
                <form id="someForm" action="/search" method="get">
                    <input type="text" name="query"/>
                </form>
                <button
                    onClick={executeCaptcha}
                >
                    Submit
                </button>

                <ReCaptcha
                    ref={(el) => {
                        setcaptchaDemo(el);
                    }}
                    size="invisible"
                    render="explicit"
                    sitekey="6Le3MKUZAAAAAKfIFRP5Z9Tie3504fC8bIOER2ZB"
                    onloadCallback={onLoadRecaptcha}
                    verifyCallback={verifyCallback}
                />
            </div>
        </Container>
    );
}