import React, { Component } from "react";
import { getReceipts } from "../../../utils/receipt";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce } from "lodash";
import DatePicker from "react-date-picker";
import ReceiptCards from "./ReceiptCards";
import ReceiptMessage from "./ReceiptMessage";

class ReceiptsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: [],
      pageNumber: 0,
      filterDate: null,
      isLoading: true
    };
  }

  componentDidMount() {
    this.getAndSetReceipts();
  }

  handleChange = filterDate => {
    this.setState({
      filterDate
    });
  };

  handleClickDateFilter = () => {
    this.setState({ pageNumber: 0, receipts: [], isLoading: true });
    this.getAndSetReceipts();
  };

  loadFunc = () => {
    this.setState(state => ({
      pageNumber: ++state.pageNumber,
      isLoading: true
    }));
    this.getAndSetReceipts();
  };

  getAndSetReceipts = () => {
    const { pageNumber, filterDate } = this.state;
    getReceipts(pageNumber, filterDate)
      .then(data =>
        this.setState(state => ({
          receipts: state.receipts.concat(data),
          isLoading: false
        }))
      )
      .catch(() => alert("I can not find receipts"));
  };

  debouncedFiltered = debounce(
    () =>
      this.handleClickDateFilter(),
    500
  );

  render() {
    const { receipts, isLoading, filterDate } = this.state;

    return (
      <div className="receipts">
        <h1>Receipts</h1>
        <DatePicker
          onChange={date => this.handleChange(date)}
          format="dd/MM/yyyy"
          value={filterDate}
        />
        <div className="date-filter-btn" onClick={this.debouncedFiltered}>
          filter
        </div>
        <InfiniteScroll
          dataLength={receipts.length}
          next={this.loadFunc}
          hasMore={true}
        >
          <ReceiptCards receipts={receipts} />
        </InfiniteScroll>
        <ReceiptMessage
          isLoading={isLoading}
          receiptsLength={receipts.length}
        />
      </div>
    );
  }
}

export default ReceiptsList;
