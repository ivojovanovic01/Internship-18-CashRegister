import React, { Component } from "react";
import { Route } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
