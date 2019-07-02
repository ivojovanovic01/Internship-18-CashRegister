import React, { Component } from "react";
import axios from "axios";
import { TAX_TYPES } from "./../../enums/taxTypes";

class ProductCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        barcode: 0,
        price: 0,
        availableQuantity: 1,
        taxType: "Excise"
      }
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState(state => ({
      product: { ...state.product, [target.name]: target.value }
    }));
  };

  createProduct = () => {
    const { product } = this.state;
    if (
      product.name.length < 3 ||
      product.barcode.length !== 13 ||
      product.price <= 0 ||
      product.availableQuantity < 1 ||
      product.taxType !== ("Excise" || "Direct")
    )
      return;

    axios
      .post("/api/products/add", this.state.product)
      .then(response => this.props.history.push("products/all"))
      .catch(err => alert("Create unsuccessfull"));
  };

  render() {
    const { product } = this.state;
    return (
      <div className="products">
        <h1>Product name:</h1>
        <input
          name="name"
          value={product.name || ""}
          onChange={e => this.handleChange(e)}
        />
        {String(product.name).length < 3 && <div>problem</div>}
        <p>Barcode: </p>
        <input
          type="number"
          name="barcode"
          value={product.barcode || ""}
          onChange={e => this.handleChange(e)}
        />
        {String(product.barcode).length !== 13 && <div>problem</div>}
        <p>Product price: </p>
        <input
          type="number"
          name="price"
          value={product.price || ""}
          onChange={e => this.handleChange(e)}
        />
        {product.price <= 0 && <div>problem</div>}
        <p>Available Quantity</p>
        <input
          type="number"
          name="availableQuantity"
          value={product.availableQuantity || ""}
          onChange={e => this.handleChange(e)}
        />
        {product.availableQuantity < 1 && <div>problem</div>}
        <p>Tax type: </p>
        <select
          name="taxType"
          onChange={e => this.handleChange(e)}
          value={product.taxType}
        >
          {TAX_TYPES.map((taxType, id) => (
            <option value={taxType} key={id}>
              {taxType}
            </option>
          ))}
        </select>
        <input type="submit" onClick={this.createProduct} />
      </div>
    );
  }
}

export default ProductCreate;
