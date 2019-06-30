import React, { Component } from "react";
import axios from "axios";

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
    axios
      .get("/api/cashiers/get-by-username-and-password", {
        params: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(response => this.props.handleLogin(response))
      .catch(err => alert("I can not find a cashier"));
  };

  render() {
    const { isLogged } = this.props;
    if (isLogged) return false;
    const { username, password } = this.state;
    return (
      <div className="login-form">
        <h1>Login In Cashier Account</h1>
        <div className="cashierUsername">
          <label>Username:</label>
          <input
            name="username"
            onChange={this.handleChange}
            value={username}
          />
        </div>

        <div className="cashierPassword">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>

        <div className="loginCashier">
          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
