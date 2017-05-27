import React, { Component } from 'react';
import firebase from 'firebase';
import LoginView from '../Containers/LoginView';

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            password_response: {}
        }

        console.log(this.state);

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

            })
            .catch(error => {

                console.log(error);
                this.setState({password_response: error})

            });


    }

    render() {
        console.log(this.state.password_response);

        return (
            <LoginView
                handleLogin={ () => this.handleLogin() }
                handleRegistration={ () => this.handleRegistration() }
            />
        );

    }

}

export default Login;
