import React, { Component } from "react";
import { withRouter } from "react-router";
import ProductCreateForm from "./ProductCreateForm";
import {
  isBarcodeValid,
  isNameValid,
  isPriceValid,
  isQuantityValid,
  isValueNumber,
  createProduct
} from "./../../utils/product";

class ProductCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        barcode: "",
        price: "",
        availableQuantity: "",
        taxType: ""
      }
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState(state => ({
      product: { ...state.product, [target.name]: target.value }
    }));
  };

  handleChangeNumber = e => {
    const { target } = e;
    const prevValue = this.state.product[target.name];
    const value = isValueNumber(target.value) ? target.value : prevValue;
    this.setState(state => ({
      product: { ...state.product, [target.name]: value }
    }));
  };

  handleChangePrice = e => {
    const { value } = e.target;
    const prevPrice = this.state.product.price;
    const price = value >= 0 ? value : prevPrice;
    this.setState(state => ({
      product: { ...state.product, price }
    }));
  };

  setTaxTypeDefaultValue = taxType => {
    this.setState(state => ({
      product: { ...state.product, taxType }
    }));
  };

  createProduct = () => {
    const { product } = this.state;
    const {history} = this.props;

    if (this.isProductNonValid()) return alert("Check the entered data");

    createProduct(product)
      .then(data => {
        alert(`Product: ${product.name} is successfully created`);
        history.push("/products");
      })
      .catch(err => alert("The name/barcode already exists"));
  };

  isProductNonValid = () => {
    const { product } = this.state;
    return (
      !isNameValid(product.name) ||
      !isBarcodeValid(product.barcode) ||
      !isPriceValid(product.price) ||
      !isQuantityValid(product.availableQuantity) ||
      product.taxType === ""
    );
  };
  
  render() {
    const { product } = this.state;
    return (
      <div className="create-product">
        <h1>Create product</h1>
        <div className="create-product-form">
          <ProductCreateForm
            product={product}
            handleChange={this.handleChange}
            handleChangeNumber={this.handleChangeNumber}
            handleChangePrice={this.handleChangePrice}
            setTaxTypeDefaultValue={this.setTaxTypeDefaultValue}
          />
          {this.isProductNonValid() ? (
            <input
              type="submit"
              className="non-valid-product-submit"
              onClick={this.createProduct}
            />
          ) : (
            <input
              type="submit"
              className="valid-product-submit"
              onClick={this.createProduct}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCreate);
