import React, { Component } from "react";
import {
  getProduct,
  editProduct,
  isValueNumber,
  isEditedProductNonValid
} from "./../../../utils/product";
import ProductEditForm from "./ProductEditForm";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id)
      .then(product => this.setState({ product }))
      .catch(() => alert("I can not find product"));
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

  editProduct = () => {
    const { product } = this.state;
    const { history } = this.props;

    if (isEditedProductNonValid(product)) return;

    editProduct(product)
      .then(() => {
        alert(`Product: ${product.name} is successfully edited`);
        history.push("/products");
      })
      .catch(() => alert("The barcode already exists"));
  };

  render() {
    const { product } = this.state;
    if (product === null) return <div>Can not be find</div>;
    return (
      <div className="edit-product">
        <h1>Edit product</h1>
        <ProductEditForm
          product={product}
          handleChange={this.handleChange}
          handleChangeNumber={this.handleChangeNumber}
          handleChangePrice={this.handleChangePrice}
          handleClick={this.editProduct}
        />
      </div>
    );
  }
}

export default ProductEdit;
