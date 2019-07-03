import React, { Component } from "react";
import ProductAvailableQuantityPopup from "./ProductAvailableQuantityPopup";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const { product, changeProductInState } = this.props;
    return (
      <div className="product-details" key={product.id}>
        <h1>{product.name}</h1>
        <h2>Barcode: {product.barcode}</h2>
        <p>Price: {product.price}kn</p>
        <p>Available quantity: {product.availableQuantity}kom</p>
        <p>Tax type: {product.taxType.toLowerCase()}</p>
        <div className="product-btns">
          <div className="product-edit" onClick={this.togglePopup}>
            edit
          </div>
          <div
            className="product-available-quantity"
            onClick={this.togglePopup}
          >
            increase AQ
          </div>
        </div>
        {this.state.showPopup && (
          <ProductAvailableQuantityPopup
            product={product}
            closePopup={this.togglePopup}
            changeProductInState={changeProductInState}
          />
        )}
      </div>
    );
  }
}

export default ProductDetails;
