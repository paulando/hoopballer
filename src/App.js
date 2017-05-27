import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";
import DashboardView from "./Containers/DashboardView";
import Error404 from "./Containers/Error404";

class App extends Component {

  render() {
    return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/dashboard" component={DashboardView}/>
                  <Route component={Error404}/>
                  {/*<Route path="/about" component={About}/>
                  <Route path="/portfolio" component={Portfolio}/>
                  <Route exact path="/blog" component={Blog}/>
                  <Route path="/blog/:id" component={BlogItem}/>
                  <Route path="/contact" component={Contact}/>
                  */}
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
