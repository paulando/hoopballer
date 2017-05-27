import React, { Component } from 'react';
import firebase from 'firebase';
import HomeView from '../Containers/HomeView';
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            is_logged: false
        }

        firebase.auth().onAuthStateChanged(firebaseUser => {

            if (firebaseUser) {

                console.log(firebaseUser);
                this.setState({
                    is_logged: true
                });

            } else {

                console.log("not logged");
                this.setState({
                    is_logged: false
                });

            }

        });

        console.log(this.state);

    }

    render() {
        console.log(this.state);

        if (this.state.is_logged) {

            return (
                <HomeView>
                    <Dashboard />
                </HomeView>
            )

        } else {

            return(
                <HomeView>
                    <Login />
                </HomeView>
            )

        }

    }

}

export default Home;
