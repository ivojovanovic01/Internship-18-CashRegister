import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCashier: {
        username: "",
        password: ""
      },
      cashier: {}
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState(state => ({
      loginCashier: { ...state.loginCashier, [target.name]: target.value }
    }));
  };

  handleSubmit = () => {
    axios
      .get("/api/cashiers/get-by-username-and-password", {
        params: {
          username: this.state.loginCashier.username,
          password: this.state.loginCashier.password
        }
      })
      .then(response => this.setState({ cashier: { ...response.data } }))
      .catch(err => alert("I can not find a cashier"));
  };

  getCashier = () => {
    axios
      .get("/api/cashiers/get-by-id", {
        params: {
          id: 1
        }
      })
      .then(response => {})
      .catch(err => alert("I can not find a cashier"));
  };

  render() {
    const { cashierUsername, cashierPassword, cashier } = this.state;
    return (
      <div className="home">
        <h1 onClick={this.getCashier()}>Welcome to cash register</h1>

        <div className="login-form">
          <h1>Login In Cashier Account</h1>
          <div className="cashierUsername">
            <label>Username:</label>
            <input
              name="username"
              onChange={this.handleChange}
              value={cashierUsername}
            />
          </div>

          <div className="cashierPassword">
            <label>Password:</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              value={cashierUsername}
            />
          </div>

          <div className="loginCashier">
            <button type="submit" onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </div>

        {Object.getOwnPropertyNames(this.state.cashier).length === 0 ? (
          <div>loading...</div>
        ) : (
          <div>
            {cashier.cashRegisterCashiers.map(el => (
              <p key={el.cashRegisterId}>{el.cashRegister.name}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Login;
