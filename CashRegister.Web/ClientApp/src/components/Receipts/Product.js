import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { debounce } from "lodash";
import { getSearchedProducts } from "./../../utils/product";
import ProductDetails from "./../Products/List/ProductDetails";
import ProductQuantity from "./ProductQuantity";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuantityPopup: false,
      isChecked: false
    };
  }

  handleKeyPress = e => {
    if (e.key === "Enter" && !this.state.showQuantityPopup)
      this.setState({ showQuantityPopup: true });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
      <div className="product-card">
        <ProductDetails product={this.props.product} />
        <input
          type="checkbox"
          name="selectedProduct"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          disabled = {this.props.isDisabled}
        />
        {this.state.showQuantityPopup && this.state.isChecked === true && (
          <ProductQuantity product={this.props.product} addProductOnReceipt={this.props.addProductOnReceipt}/>
        )}
      </div>
    );
  }
}

export default Product;
