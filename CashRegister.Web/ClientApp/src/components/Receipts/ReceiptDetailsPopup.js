import React, { Component } from "react";
import { getReceipt } from "./../../utils/receipt";

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
      .catch(err => alert("no"));
  }

  render() {
    const { closePopup } = this.props;
    const { receipt } = this.state;
    console.log(receipt)
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{receipt.id}</h1>
          {
              (Array.isArray(receipt.receiptProducts) && receipt.receiptProducts.length) && receipt.receiptProducts.map(rp => <p key={rp.productId}>{rp.product.name} {rp.productQuantity}</p>)
          }
          <p>Price without taxes: {receipt.taxFreePrice}</p>
          <p>Total excise tax: {receipt.totalExciseTax}</p>
          <p>Total direct tax: {receipt.totalDirectTax}</p>
          <button onClick={closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default ReceiptDetailsPopup;
