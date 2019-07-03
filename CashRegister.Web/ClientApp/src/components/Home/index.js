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
      <Link to="/receipts/create">Create receipt</Link>
      <Link to="/receipts">All receipts</Link>
    </div>;
  }
}

export default Home;