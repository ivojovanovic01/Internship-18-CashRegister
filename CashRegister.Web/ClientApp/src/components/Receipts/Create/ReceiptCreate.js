import React, { Component } from "react";
import ProductDetails from "../../Products/List/ProductDetails";
import ProductAddPopup from "./Popup/ProductAddPopup";
import {
  createReceipt,
  getReceipt,
  receiptPrintHTML,
  receiptCSS
} from "./../../../utils/receipt";
import { Printd } from "printd";
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
        totalPrice: 0
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
    const { history } = this.props;

    createReceipt(receipt)
      .then(receiptId => {
        alert("Receipt is created");
        getReceipt(receiptId)
          .then(receipt => {
            const d = new Printd();
            const el = document.createElement("div");
            el.innerHTML = receiptPrintHTML(receipt);
            d.print(el, [receiptCSS()]);
            history.push("/receipts");
          })
          .catch(() => alert("I can not find receipt"));
      })
      .catch(() => alert("Receipt is not created"));
  };

  handleKeyPress = e => {
    const { showPopup } = this.state;
    if (e.key === "Enter" && !showPopup) this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  handleRemoveProduct = id => {
    let products = this.state.receipt.products.filter(
      product => product.id !== id
    );
    this.setState(state => ({ receipt: { ...state.receipt, products } }));
  };

  render() {
    const { products } = this.state.receipt;
    const { receipt, showPopup } = this.state;

    return (
      <div className="receipt-create">
        <h1>Receipt</h1>
        {!products.length ? (
          <div>No products. Press enter to add product.</div>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <ProductDetails product={product} />
              <p className="qunatity">{product.quantity}</p>
              <div
                className="delete-product"
                onClick={() => this.handleRemoveProduct(product.id)}
              >
                x
              </div>
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
            <p>Total price: {receipt.totalPrice} kn</p>
            <p>Price without tax: {receipt.taxFreePrice} kn</p>
            <p>Total excise tax: {receipt.totalExciseTax} kn</p>
            <p>Total direct tax: {receipt.totalDirectTax} kn</p>
            <div onClick={this.createReceipt}>create receipt</div>
          </div>
        )}
      </div>
    );
  }
}

export default ReceiptCreate;
