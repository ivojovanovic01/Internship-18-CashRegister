import React, { Component } from "react";
import  { Redirect, Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
  }

  render() {
    if(false) return <Redirect to='/'  />;
    const { cashierUsername, cashierPassword, cashier } = this.state;
    return <div className="home">
      <Link to="/products">Products</Link>
      <div>Create receipt</div>
      <div>All receipts</div>
    </div>;
  }
}

export default Home;