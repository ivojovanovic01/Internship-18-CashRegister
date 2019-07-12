import React, { Component } from "react";
import ReceiptDetailsPopup from "./ReceiptDetailsPopup";
import { formatCreatedTime } from "../../../utils/receipt";

class ReceiptCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState(state => ({
      showPopup: !state.showPopup
    }));
  };

  render() {
    const { receipt } = this.props;
    const { showPopup } = this.state;
    return (
      <div className="recepit-card">
        <h1>{receipt.id}</h1>
        <h2>{formatCreatedTime(receipt.createdTime)}</h2>
        <p>Total price: {receipt.totalPrice}</p>
        <div className="show-more-receipt" onClick={this.togglePopup}>
          Show more
        </div>
        <ReceiptDetailsPopup
          receiptId={receipt.id}
          showPopup={showPopup}
          closePopup={this.togglePopup}
        />
      </div>
    );
  }
}

export default ReceiptCard;
