import React, { Component } from "react";
import axios from "axios";

class ProductAvailableQuantityPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity: 1
    };
  }
  handleChange = e => {
    const { target } = e;
    this.setState(state => ({
      [target.name]: target.value
    }));
  };

  render() {
    const { product, increaseQuantity, closePopup } = this.props;
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
          <button onClick={() => increaseQuantity(newQuantity)}>add quantity</button>
        </div>
      </div>
    );
  }
}

export default ProductAvailableQuantityPopup;
