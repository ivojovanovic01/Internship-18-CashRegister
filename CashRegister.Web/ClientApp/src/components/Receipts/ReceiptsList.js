import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { getReceipts } from "./../../utils/receipt";
import ReceiptCard from "./ReceiptCard";
import InfiniteScroll from "react-infinite-scroll-component";
import DatePicker from "react-date-picker";

class ReceiptsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: [],
      pageNumber: 0,
      filterDate: null
    };
  }

  componentDidMount() {
    localStorage.setItem(
      "account",
      JSON.stringify({ cashierId: 1, cashRegisterId: 1 })
    );
    getReceipts(0, this.state.filterDate)
      .then(data =>
        this.setState({ receipts: this.state.receipts.concat(data) })
      )
      .catch(err => alert("I can not find receipts"));
  }

  loadFunc = () => {
    console.log(this.state.pageNumber)
    this.setState({ pageNumber: ++this.state.pageNumber });
    getReceipts(this.state.pageNumber, this.state.filterDate)
      .then(data =>
        this.setState({ receipts: this.state.receipts.concat(data) })
      )
      .catch(err => alert("I can not find receipts"));
  };

  handleChange = date => {
    this.setState({
      filterDate: date
    });
  };

  handleClickDateFilter = () => {
    this.setState({pageNumber: 1, receipts: []})
    console.log(typeof(this.state.filterDate))
    getReceipts(0, this.state.filterDate)
      .then(data =>
        this.setState({ receipts: this.state.receipts.concat(data) })
      )
      .catch(err => alert("I can not find receipts"));
  }

  render() {
    if (false) return <Redirect to="/" />;
    return (
      <div className="recepit-create">
        <h1>All receipts</h1>
        <DatePicker
          onChange={date => this.handleChange(date)}
          value={this.state.filterDate}
        />

        <div onClick={this.handleClickDateFilter}>filter</div>

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
