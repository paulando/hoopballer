import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import LoginView from '../Containers/LoginView';

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            auth_error: "",
            snackbar: false,
            redirect: false
        }

    }

    handleRegistration() {

        console.log("registering...");

        const email = document.getElementById("input_email").value;
        const password = document.getElementById("input_password").value;

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {

                console.log(res);

            })
            .catch(error => {
                // Handle Errors here.
                console.log(error);

            });

    }
  
    handleLogin() {

        console.log("loggin in...", this.state);

        const email = document.getElementById("input_email").value;
        const password = document.getElementById("input_password").value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {

                console.log(res);
                              
                this.setState({
                    redirect: true
                });


            })
            .catch(error => {

                console.log(error);
                this.setState({
                    auth_error: error.message,
                    snackbar: true
                })

            });

    }

    handleSnackbarClose() {

        this.setState({
            snackbar: false
        });

    }

    render() {
        console.log(this.state);

        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }

        return (
            <LoginView
                handleLogin={ () => this.handleLogin() }
                handleRegistration={ () => this.handleRegistration() }
                authError={this.state.auth_error}
                snackbar={this.state.snackbar}
                handleSnackbarClose={ () => this.handleSnackbarClose() }
            />
        );

    }

}

export default Login;
