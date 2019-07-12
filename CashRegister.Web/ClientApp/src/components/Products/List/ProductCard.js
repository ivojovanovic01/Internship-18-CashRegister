import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ProductDetailsBtns from "./ProductDetailsBtns";
import ProductAvailableQuantityPopup from "./../Edit/ProductAvailableQuantityPopup";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState(state => ({
      showPopup: !state.showPopup
    }));
  };

  render() {
    const { showPopup } = this.state;
    const { product, changeProductInState } = this.props;
    return (
      <div className="product-card">
        <ProductDetails product={product} />
        <ProductDetailsBtns
          productId={product.id}
          togglePopup={this.togglePopup}
        />
        <ProductAvailableQuantityPopup
          product={product}
          showPopup={showPopup}
          closePopup={this.togglePopup}
          changeProductInState={changeProductInState}
        />
      </div>
    );
  }
}

export default ProductCard;
