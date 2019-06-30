import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
  }


  render() {
    const { cashierUsername, cashierPassword, cashier } = this.state;
    return (
      <div className="home">
          ala
      </div>
    );
  }
}

export default Home;
