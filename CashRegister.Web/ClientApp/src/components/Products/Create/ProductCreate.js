import React, { Component } from "react";
import { withRouter } from "react-router";
import ProductCreateForm from "./ProductCreateForm";
import {
  isValueNumber,
  createProduct,
  isProductNonValid
} from "../../../utils/product";

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
    const { history } = this.props;

    if (isProductNonValid(product)) return;

    createProduct(product)
      .then(() => {
        alert(`Product: ${product.name} is successfully created`);
        history.push("/products");
      })
      .catch(() => alert("The name/barcode already exists"));
  };

  render() {
    const { product } = this.state;
    return (
      <div className="create-product">
        <h1>Create product</h1>
        <ProductCreateForm
          product={product}
          handleChange={this.handleChange}
          handleChangeNumber={this.handleChangeNumber}
          handleChangePrice={this.handleChangePrice}
          setTaxTypeDefaultValue={this.setTaxTypeDefaultValue}
          handleClick={this.createProduct}
        />
      </div>
    );
  }
}

export default withRouter(ProductCreate);
