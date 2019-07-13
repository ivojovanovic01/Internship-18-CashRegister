import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: {},
      isLogged: false
    };
  }

  render() {
    return (
      <div className="home">
        <Link to="/products" className="product-btn">
          Products
        </Link>
        <Link to="/receipts" className="all-receipts-btn">
          All receipts
        </Link>
        <Link to="/receipts/create" className="create-receipt-btn">
          Create receipt
        </Link>
      </div>
    );
  }
}

export default Home;
