import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class ReceiptsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (false) return <Redirect to="/" />;
    return <div className="recepit-create">Lista</div>;
  }
}

export default ReceiptsList;
