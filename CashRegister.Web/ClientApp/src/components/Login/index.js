import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import ChooseCashRegister from "./ChooseCashRegister";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
  }

  handleLogin = cashier => {
    this.setState({ cashier, isLogged: true });
  };

  render() {
    if(localStorage.getItem("authToken")) return <Redirect to="/home" />
    return (
      <div className="login">
        <LoginForm
          handleLogin={this.handleLogin}
          isLogged={this.state.isLogged}
        />
        <ChooseCashRegister
          isLogged={this.state.isLogged}
          cashier={this.state.cashier}
        />
      </div>
    );
  }
}

export default Login;
