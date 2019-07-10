import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { debounce } from "lodash";
import { getSearchedProducts } from "./../../utils/product";
import ProductDetails from "./../Products/List/ProductDetails";
import ProductAddPopup from "./ProductAddPopup";

class ReceiptCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], showPopup: false };
  }

  addProductOnReceipt = (product, quantity) => {
    const { products } = this.state;
    if (
      product.availableQuantity < quantity ||
      product.barcode.length !== 13 ||
      product.name < 3 ||
      product.price <= 0 ||
      product.taxType === null
    )
      return alert("quantity");

    this.setState({
      products: [...this.state.products, { ...product, quantity: quantity }],
      showPopup: false
    });
  };

  createReceipt = () => {
    var receipt = {};
    receipt.createdTime = Date.now;
    receipt.taxFreePrice = this.getTaxFreePrice();
    receipt.totalExciseTax = this.getTotalExciseTax();
    receipt.totalDirectTax = this.getTotalDirectTax();
    receipt.totalPrice = this.getTotalPrice();
    receipt.cashRegisterId = 1;
    receipt.cashierId = 1;
  }

  getTotalExciseTax = () => {
    var totalExciseTax = 0;
    this.state.products.forEach(product => {
      (product.taxType === "Excise") ? totalExciseTax += (product.price - (product.price / 1.05))* product.quantity : null
    });
    return totalExciseTax;
  }

  getTotalDirectTax = () => {
    var totalDirectTax = 0;
    this.state.products.forEach(product => {
      (product.taxType === "Direct") ? totalDirectTax += (product.price - (product.price / 1.25))* product.quantity : null
    });
    return totalDirectTax;
  }

  getTotalPrice = () => {
    var totalPrice = 0;
    this.state.products.forEach(product => {
      totalPrice = product.price * product.quantity;
    });
    return totalPrice;
  };

  getTaxFreePrice = () => {
    var taxFreePrice = 0;
    this.state.products.forEach(product => {
      product.taxType === "Excise"
        ? (taxFreePrice += product.price / 1.05 * product.quantity)
        : (taxFreePrice += product.price / 1.25 * product.quantity);
    });
    return taxFreePrice;
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && !this.state.showPopup)
      this.setState({ showPopup: true });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <div className="products">
        <h1>Receipt</h1>
        {this.state.products === [] ? (
          <div>No products</div>
        ) : (
          this.state.products.map(product => (
            <div key={product.id} className="product-card">
              <ProductDetails product={product} />
              <p>{product.quantity}</p>
            </div>
          ))
        )}
        {this.state.showPopup && (
          <ProductAddPopup
            addProductOnReceipt={this.addProductOnReceipt}
            products={this.state.products}
          />
        )}
        {this.state.products.length >= 1 && (
          <div>Total: {this.getTotalPrice().toFixed(2)}kn
          <p>{this.getTaxFreePrice().toFixed(2)}</p>
          <p>{this.getTotalExciseTax().toFixed(2)}</p>
          <p>{this.getTotalDirectTax().toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ReceiptCreate;
