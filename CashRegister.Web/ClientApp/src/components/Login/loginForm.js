import React, { Component } from "react";
import { getCashierByUsernameAndPassword } from "./../../utils/login";
import "./index.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    const { handleLogin } = this.props;

    getCashierByUsernameAndPassword(username, password)
      .then(cashier => handleLogin(cashier))
      .catch(() => alert("I can not find a cashier"));
  };

  render() {
    const { isLogged } = this.props;
    if (isLogged) return false;
    const { username, password } = this.state;
    return (
      <div className="login-form">
        <h1>Login In Cashier Account</h1>
        <div className="cashierUsername">
          <p>Username:</p>
          <input
            type="text"
            name="username"
            maxLength="20"
            onChange={this.handleChange}
            value={username}
          />
        </div>

        <div className="cashierPassword">
          <p>Password:</p>
          <input
            name="password"
            type="password"
            maxLength="20"
            onChange={this.handleChange}
            value={password}
          />
        </div>

        <div className="login-btn" onClick={this.handleSubmit}>
          Login
        </div>
      </div>
    );
  }
}

export default LoginForm;
