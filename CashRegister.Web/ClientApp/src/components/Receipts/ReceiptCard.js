import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import ReceiptDetailsPopup from "./ReceiptDetailsPopup";
import { getReceipts } from "./../../utils/receipt";

class ReceiptCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };


  render() {
    const { receipt } = this.props;
    if (false) return <Redirect to="/" />;
    return (
      <div className="recepit-card">
        <h1>{receipt.id}</h1>
        <h2>{receipt.createdTime}</h2>
        <p>Total price: {receipt.totalPrice}</p>
        <div onClick={this.togglePopup}>Show more</div>
        {
            this.state.showPopup && <ReceiptDetailsPopup receiptId={receipt.id} closePopup={this.togglePopup}/>
        }
      </div>
    );
  }
}

export default ReceiptCard;
