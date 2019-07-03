import React, { Component } from "react";
import { availableQuantityIncrease } from "./../../utils/product";

class ProductAvailableQuantityPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity: 1
    };
  }
  handleChange = e => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  increaseAvailableQuantity = () => {
    const { newQuantity } = this.state;
    if (newQuantity < 1) return;

    const editedProduct = {
      ...this.props.product,
      availableQuantity: this.props.product.availableQuantity + Number(newQuantity)
    };

    availableQuantityIncrease(editedProduct)
      .then(this.changeProductAndClosePopup(editedProduct))
      .catch(err => alert("I can not find product"));
  };

  changeProductAndClosePopup = editedProduct => {
    const { changeProductInState, closePopup } = this.props;
    changeProductInState(editedProduct);
    closePopup();
  };

  render() {
    const { product, closePopup } = this.props;
    const { newQuantity } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{product.name}</h1>
          <p>Available quantity: {product.availableQuantity}</p>
          <p>Products to add: </p>
          <input
            type="number"
            name="newQuantity"
            value={newQuantity}
            onChange={this.handleChange}
          />
          <button onClick={closePopup}>close me</button>
          <button onClick={() => this.increaseAvailableQuantity(newQuantity)}>
            add quantity
          </button>
        </div>
      </div>
    );
  }
}

export default ProductAvailableQuantityPopup;
