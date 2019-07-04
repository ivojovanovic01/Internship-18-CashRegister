import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { getReceipts } from "./../../utils/receipt";
import ReceiptCard from "./ReceiptCard";
import InfiniteScroll from "react-infinite-scroll-component";

class ReceiptsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: [],
      pageNumber: 0
    };
  }

  componentDidMount() {
    localStorage.setItem(
      "account",
      JSON.stringify({ cashierId: 1, cashRegisterId: 1 })
    );
    this.loadFunc();
  }

  loadFunc = () => {
    this.setState({ pageNumber: ++this.state.pageNumber });
    getReceipts(this.state.pageNumber)
      .then(data =>
        this.setState({ receipts: this.state.receipts.concat(data) })
      )
      .catch(err => alert("I can not find receipts"));
  };

  render() {
    if (false) return <Redirect to="/" />;
    return (
      <div className="recepit-create">
        <h1>All receipts</h1>
        <input type="date" />

        <div>filter</div>

        <InfiniteScroll
          dataLength={this.state.receipts.length}
          next={this.loadFunc}
          hasMore={true}
        >
          {this.state.receipts.map(receipt => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ReceiptsList;
