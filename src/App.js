import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Error404 from "./Containers/Error404";

class App extends Component {

  render() {
    return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route component={Error404}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
