import React, { Component } from "react";
import {
  isValueNumber,
  isQuantityValid,
  availableQuantityIncrease
} from "./../../../utils/product";
import ProductDetails from "../List/ProductDetails";
import ProductNewQuantitySubmitBtn from "./ProductNewQuantitySubmitBtn";
import ProductNewQuantityInput from "./ProductNewQuantityInput";

class ProductAvailableQuantityPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity: "1"
    };
  }

  handleChange = e => {
    const { target } = e;
    const prevValue = this.state.newQuantity;
    const newQuantity = isValueNumber(target.value) ? target.value : prevValue;
    this.setState({
      newQuantity
    });
  };

  increaseAvailableQuantity = () => {
    const { newQuantity } = this.state;
    if (!isQuantityValid(newQuantity))
      return alert("New quantity is not valid");

    const { product } = this.props;
    const editedProduct = {
      ...product,
      availableQuantity: product.availableQuantity + Number(newQuantity)
    };

    availableQuantityIncrease(editedProduct)
      .then(this.changeProductAndClosePopup(editedProduct))
      .catch(() => alert("Available quantity can not be changed"));
  };

  changeProductAndClosePopup = editedProduct => {
    const { changeProductInState, closePopup } = this.props;
    changeProductInState(editedProduct);
    closePopup();
  };

  render() {
    const { product, closePopup, showPopup } = this.props;
    if (!showPopup) return null;

    const { newQuantity } = this.state;
    return (
      <div className="new-quantity-popup">
        <div className="new-quantity-popup_inner">
          <div className="close-popup" onClick={closePopup}>
            x
          </div>
          <ProductDetails product={product} />
          <p className="new-quantity-information">New quantity: </p>
          <ProductNewQuantityInput
            newQuantity={newQuantity}
            handleChange={this.handleChange}
            maxQuantity={9999999999}
          />
          <ProductNewQuantitySubmitBtn
            newQuantity={newQuantity}
            handleClick={this.increaseAvailableQuantity}
            maxQuantity={9999999999}
          />
        </div>
      </div>
    );
  }
}

export default ProductAvailableQuantityPopup;
