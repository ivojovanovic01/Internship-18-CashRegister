import React, { Component } from "react";
import { Route } from "react-router";
import Login from "./components/Login";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
