import React, { Component } from "react";
import ProductDetails from "../../Products/List/ProductDetails";
import ProductAddPopup from "./Popup/ProductAddPopup";
import { createReceipt, getReceipt } from "./../../../utils/receipt";
import { Printd } from "printd";
import Receipt from "./../Deatils/Receipt";
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

    createReceipt(receipt)
      .then(receiptId => {
        alert("Receipt is created");
        getReceipt(receiptId)
          .then(receipt => {
            const d = new Printd();
            const el = <Receipt receipt={receipt} />;
            d.print(el);
          })
          .catch(() => console.log("err"));
      })
      .catch(() => alert("err"));
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
            <p>Total price: {receipt.totalPrice}kn</p>
            <p>Price without tax: {receipt.taxFreePrice}kn</p>
            <p>Total excise tax: {receipt.totalExciseTax}kn</p>
            <p>Total direct tax: {receipt.totalDirectTax}kn</p>
          </div>
        )}
        <div onClick={this.createReceipt}>create receipt</div>
      </div>
    );
  }
}

export default ReceiptCreate;
