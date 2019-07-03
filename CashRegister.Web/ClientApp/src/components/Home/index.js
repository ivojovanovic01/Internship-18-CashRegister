import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
  }

  redirectToProducts = () => {

  }

  render() {
    if(false) return <Redirect to='/'  />;
    const { cashierUsername, cashierPassword, cashier } = this.state;
    return <div className="home">
      <div onClick={this.redirectToProducts}>Products</div>
      <div>Receipts</div>
    </div>;
  }
}

export default Home;