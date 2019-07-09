import React, { Component } from "react";
import LoginForm from "./LoginForm";
import ChooseCashRegister from "./ChooseCashRegister";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
    localStorage.clear();
  }

  handleLogin = response => {
    this.setState({ cashier: { ...response.data }, isLogged: true });
  };

  render() {
    return (
      <div className="home">
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
