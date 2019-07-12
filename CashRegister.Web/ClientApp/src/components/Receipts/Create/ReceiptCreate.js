import React, { Component } from "react";
import ProductDetails from "../../Products/List/ProductDetails";
import ProductAddPopup from "./Popup/ProductAddPopup";
import { isProductNonValid } from "./../../../utils/product";
import {
  isQuantitySufficient,
  getTaxFreePrice,
  getTotalExciseTax,
  getTotalDirectTax,
  getTotalPrice
} from "./../../../utils/receipt";

class ReceiptCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showPopup: false,
      receipt: {
        products: [],
        createdTime: null,
        taxFreePrice: 0,
        totalExciseTax: 0,
        totalDirectTax: 0,
        totalPrice: 0,
        cashRegisterId: 1,
        cashierId: 1
      }
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  addProductOnReceipt = editedProduct => {
    if (
      !isQuantitySufficient(
        editedProduct.availableQuantity,
        editedProduct.quantity
      )
    )
      return alert("Product is not valid");

    const { products } = this.state.receipt;
    products.push(editedProduct);
    this.setState(state => ({
      showPopup: false,
      receipt: {
        ...state.receipt,
        products,
        taxFreePrice: getTaxFreePrice(products),
        totalExciseTax: getTotalExciseTax(products),
        totalDirectTax: getTotalDirectTax(products),
        totalPrice: getTotalPrice(products)
      }
    }));
  };

  createReceipt = () => {
    const { receipt } = this.state;
    const { products } = this.state.receipt;
    this.setState({
      receipt: {
        ...receipt,
        createdTime: Date.now,
        taxFreePrice: getTaxFreePrice(products),
        totalExciseTax: getTotalExciseTax(products),
        totalDirectTax: getTotalDirectTax(products),
        totalPrice: getTotalPrice(products)
      }
    });
  };

  handleKeyPress = e => {
    const { showPopup } = this.state;
    if (e.key === "Enter" && !showPopup) this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { products } = this.state.receipt;
    const { receipt } = this.state;
    const { showPopup } = this.state;
    return (
      <div className="receipt-create">
        <h1>Receipt</h1>
        {products === [] ? (
          <div>No products</div>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <ProductDetails product={product} />
              <p>{product.quantity}</p>
            </div>
          ))
        )}
        <ProductAddPopup
          products={products}
          showPopup={showPopup}
          closePopup={this.closePopup}
          addProductOnReceipt={this.addProductOnReceipt}
        />
        {products.length >= 1 && (
          <div>
            Total: {receipt.totalPrice}kn
            <p>{receipt.taxFreePrice}</p>
            <p>{receipt.totalExciseTax}</p>
            <p>{receipt.totalDirectTax}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ReceiptCreate;
