import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import styles from '../Styles/styles';

const LoginView = (props) => (

    <div className="form__login-form">
        <TextField id="input_email" type="email" placeholder="Email" style={styles} />
        <TextField id="input_password" type="password" placeholder="Password" style={styles} />
        <RaisedButton id="btn_login" primary={true} onClick={props.handleLogin}>Login</RaisedButton>
        <RaisedButton id="btn_register" secondary={true} labelColor={"#FFFFFF"} onClick={props.handleRegistration}>Register</RaisedButton>
        <Snackbar
          open={props.snackbar}
          message={props.authError}
          autoHideDuration={4000}
          onRequestClose={props.handleSnackbarClose}
        />
    </div>

);

export default LoginView;