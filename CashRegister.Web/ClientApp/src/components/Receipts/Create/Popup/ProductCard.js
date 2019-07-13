import React, { Component } from "react";
import ProductDetails from "./../../../Products/List/ProductDetails";
import ProductQuantity from "./ProductQuantity";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuantityPopup: false,
      isChecked: false
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }
  componentWillUnmount(){
    window.removeEventListener("keypress", this.handleKeyPress);    
  }

  handleKeyPress = e => {
    const { showQuantityPopup } = this.state;
    if (e.key === "Enter" && !showQuantityPopup) {
      this.setState({ showQuantityPopup: true });
      window.removeEventListener("keypress", this.handleKeyPress);
    }
  };

  handleClickClosePopup = () => {
    this.setState({ showQuantityPopup: false });
    window.removeEventListener("keypress", this.handleKeyPress);
  };

  handleChange = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  render() {
    const { showQuantityPopup, isChecked } = this.state;
    const {
      product,
      isDisabled,
      addProductOnReceipt
    } = this.props;
    return (
      <div className="product-card">
        <ProductDetails product={product} />
        <input
          type="checkbox"
          name="selectedProduct"
          checked={isChecked}
          onChange={() => this.handleChange}
          disabled={isDisabled}
        />
        {showQuantityPopup && isChecked && (
          <ProductQuantity
            product={product}
            addProductOnReceipt={addProductOnReceipt}
            handleClickClosePopup={this.handleClickClosePopup}
          />
        )}
      </div>
    );
  }
}

export default ProductCard;
