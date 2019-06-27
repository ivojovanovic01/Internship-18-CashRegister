import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashierUsername: "",
      cashierPassword: "",
      cashier: {}
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState({ [target.name]: target.value });
  };
  
  getCashier = () => {
    axios
      .get("/api/cashiers/get-by-id", {
        params: {
          id: 1
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => alert("I can not find a cashier"));
  }

  render() {
    const { cashierUsername, cashierPassword, cashier } = this.state;
    return (
      <div className="home">
        <h1 onClick={this.getCashier()}>Welcome to cash register</h1>

        <form className="login-form" method="post">
          Cash register: Cashier username:
          <input
            type="text"
            name="cashierUsername"
            onChange={this.handleChange}
            value={cashierUsername}
            required
          />
          Cashier password:
          <input
            type="password"
            name="cashierPassword"
            onChange={this.handleChange}
            value={cashierPassword}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
