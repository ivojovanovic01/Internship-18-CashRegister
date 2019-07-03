import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class ReceiptCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (false) return <Redirect to="/" />;
    return <div className="recepit-create">Kreiranje</div>;
  }
}

export default ReceiptCreate;
