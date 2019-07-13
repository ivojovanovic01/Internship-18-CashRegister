import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import Receipts from "./components/Receipts";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />} />
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/receipts" component={Receipts} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
