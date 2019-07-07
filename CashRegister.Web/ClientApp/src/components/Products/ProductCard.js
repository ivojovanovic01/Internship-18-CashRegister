import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductAvailableQuantityPopup from "./ProductAvailableQuantityPopup";

class ProductCard extends Component {
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
    const { product } = this.props;
    return (
        <div className="product-card">
        <ProductDetails
          product={product}
        />
        <div className="product-btns">
          <Link className="product-edit" to={"/products/edit/" + product.id}>
            edit
          </Link>
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
            changeProductInState={this.props.changeProductInState}
          />
        )}
      </div>
    );
  }
}

export default ProductCard;
