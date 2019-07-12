import React, { Component } from "react";
import {
  isValueNumber,
  isQuantityValid
} from "./../../../../utils/product";

import { isQuantitySufficient } from "./../../../../utils/receipt";
import ProductNewQuantityInput from "./../../../Products/Edit/ProductNewQuantityInput";
import ProductNewQuantitySubmitBtn from "./../../../Products/Edit/ProductNewQuantitySubmitBtn";
class ProductQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "1"
    };
  }

  handleChange = e => {
    const { target } = e;
    const prevValue = this.state.product;
    const quantity = isValueNumber(target.value) ? target.value : prevValue;
    this.setState({
      quantity
    });
  };

  addProductOnReceipt = () => {
    const { quantity } = this.state;
    if (!isQuantityValid(quantity)) return alert("Quantity is not valid");

    const { product, addProductOnReceipt } = this.props;
    if (!isQuantitySufficient(product.availableQuantity, quantity))
      return alert("Quantity is greater than available quantity");

    const editedProduct = {
      ...product,
      quantity: Number(quantity)
    };
    addProductOnReceipt(editedProduct);
  };

  render() {
    const { product, addProductOnReceipt, handleClickClosePopup } = this.props;
    const { quantity } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="close-popup" onClick={handleClickClosePopup}>
            x
          </div>
          <h1>{product.name}</h1>
          <p>Available quantity: {product.availableQuantity}</p>
          <p>Products to add: </p>
          <ProductNewQuantityInput
            newQuantity={quantity}
            handleChange={this.handleChange}
            maxQuantity={product.availableQuantity}
          />
          <ProductNewQuantitySubmitBtn
            handleClick={this.addProductOnReceipt}
            maxQuantity={product.availableQuantity}
            newQuantity={quantity}
          />
        </div>
      </div>
    );
  }
}

export default ProductQuantity;
