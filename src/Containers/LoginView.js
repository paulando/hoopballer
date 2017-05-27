import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../Styles/styles';

const LoginView = (props) => (

    <div className="form__login-form">
        <TextField id="input_email" type="email" placeholder="Email" style={styles} />
        <TextField id="input_password" type="password" placeholder="Password" style={styles} />
        <RaisedButton id="btn_login" primary={true} onClick={props.handleLogin}>Login</RaisedButton>
        <RaisedButton id="btn_register" secondary={true} labelColor={"#FFFFFF"} onClick={props.handleRegistration}>Register</RaisedButton>
    </div>

);

export default LoginView;