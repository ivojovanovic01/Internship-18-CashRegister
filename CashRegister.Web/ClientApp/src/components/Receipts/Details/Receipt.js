import React, { Component } from "react";
import { getReceipt } from "./../../../utils/receipt";
import ReceiptDetails from "./../List/ReceiptDetails";

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getReceipt(id)
      .then(receipt => {
        this.setState({ receipt });
      })
      .catch(() => console.log("I can not find receipt"));
  }

  render() {
    const { receipt } = this.state;

    if (receipt == null) return;
    return (
      <div className="receipt-details-print">
        <ReceiptDetails receipt={receipt} />
      </div>
    );
  }
}

export default Receipt;
