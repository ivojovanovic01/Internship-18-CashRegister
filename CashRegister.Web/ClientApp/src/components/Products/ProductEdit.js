import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import { TAX_TYPES } from "./../../enums/taxTypes";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  handleChange = e => {
    const { target } = e;
    this.setState(state => ({
      product: { ...state.product, [target.name]: target.value }
    }));
  };

  getProduct = () => {
    axios
      .get("/api/products/get-by-id", {
        params: { id: this.props.match.params.id }
      })
      .then(response => this.setState({ product: response.data }))
      .catch(err => alert("I can not find product"));
  };

  editProduct = () => {
    const { product } = this.state;
    if (product.barcode.length !== 13 || product.price <= 0) return;

    console.log(this.props.history);
    axios
      .post("/api/products/edit", this.state.product)
      .then(response => this.props.history.push("products/all"))
      .catch(err => alert("Edit unsuccessfull"));
  };

  render() {
    const { product } = this.state;
    return (
      <div className="products">
        <h1>Product name: {product.name}</h1>
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
        <p>Available Quantity {product.availableQuantity}</p>
        <p>Tax type: </p>
        <select
          name="taxType"
          onChange={e => this.handleChange(e)}
          value={product.taxType}
        >
          {TAX_TYPES.map((taxType, id) =>
            taxType === product.taxType ? (
              <option selected key={id}>
                {taxType}
              </option>
            ) : (
              <option key={id}>{taxType}</option>
            )
          )}
        </select>
        <input type="submit" onClick={this.editProduct} />
      </div>
    );
  }
}

export default ProductEdit;
