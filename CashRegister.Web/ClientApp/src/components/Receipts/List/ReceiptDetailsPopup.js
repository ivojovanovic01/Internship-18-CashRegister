import React, { Component } from "react";
import { getReceipt } from "../../../utils/receipt";
import ReceiptDetails from "./ReceiptDetails";

class ReceiptDetailsPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt: {}
    };
  }

  componentDidMount() {
    const { receiptId } = this.props;
    getReceipt(receiptId)
      .then(receipt => this.setState({ receipt }))
      .catch(err => alert("I can not find that receipt"));
  }

  render() {
    const { closePopup, showPopup } = this.props;
    if (!showPopup) return null;

    const { receipt } = this.state;
    return (
      <div className="receipt-deatils-popup">
        <div className="receipt-deatils-popup_inner">
          <div className="close-popup" onClick={closePopup}>
            x
          </div>
          <ReceiptDetails receipt={receipt} />
        </div>
      </div>
    );
  }
}

export default ReceiptDetailsPopup;
