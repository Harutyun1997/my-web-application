import React from 'react';
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Grid from "@material-ui/core/es/Grid/Grid";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import Button from "@material-ui/core/es/Button/Button";

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

const ProfileInfoDataUserForm = React.memo(props => {
    const classes = useStyles();
    const maxLength = maxLengthCreator(30);
    return (<form onSubmit={props.handleSubmit} className={classes.form} noValidate>
            <button type={'button'} onClick={props.deactivateEditMode}>Close</button>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {createField('First Name', 'firstName', [required, maxLength], Input)}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {createField('lastName', 'lastName', [required, maxLength], Input)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {createField('Country', 'country', [required, maxLength], Input)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {createField('City', 'city', [required, maxLength], Input)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {createField('Age', 'age', [required], Input, 'number')}
                </Grid>
                <Grid item xs={12}>
                    {createField('Email Address', 'email', [required, maxLength], Input, 'email')}
                </Grid>
                <Grid item xs={12}>
                    {createField('Password', 'password', [required, maxLength], Input, 'password')}
                </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Save</Button>
        </form>
    )
});

const UserDataFormRedux = reduxForm({
    form: 'userData'
})(ProfileInfoDataUserForm);


export default UserDataFormRedux;