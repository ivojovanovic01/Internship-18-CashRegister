import React, { Component } from "react";

class ProductQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  handleChange = e => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  changeProductAndClosePopup = editedProduct => {
    
  };

  render() {
    console.log(this.props.product)
    const { product, addProductOnReceipt } = this.props;
    const { quantity } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{product.name}</h1>
          <p>Available quantity: {product.availableQuantity}</p>
          <p>Products to add: </p>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
          {
              quantity > product.availableQuantity && <p>problem</p>
          }
          <button>close</button>
          <button onClick={() => addProductOnReceipt(product, quantity)}>
            add to receipt
          </button>
        </div>
      </div>
    );
  }
}

export default ProductQuantity;
