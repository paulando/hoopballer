import React, {Component} from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import DashboardView from '../Containers/DashboardView';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sign_out: false
        }

        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = snapshot.val().username;
            console.log("username", username);
            console.log(snapshot);
        });
    } 

    handleSignOut() {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Sign-out successful");

            this.setState({sign_out: true});

        }).catch((error) => {
            // An error happened.
            console.log("Couldn't sign-out")

        });

    }

    render() {

        if (this.state.sign_out) {
            return <Redirect to="/" />
        }

        return (
            <DashboardView
                handleSignOut={ () => this.handleSignOut() }
            />
        );

    }

}

export default Dashboard;