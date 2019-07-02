import React, { Component } from "react";
import axios from "axios";
import "./index.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    axios
      .get("/api/products/all")
      .then(response => this.setState({ products: response.data }))
      .catch(err => alert("I can not find products"));
  };

  render() {
    return (
      <div className="products">
        <h1>All products</h1>
        <input type="text" />
        <div className="categories">
          <div>Barcode</div>
          <div>Name</div>
          <div>Price</div>
          <div>Available Quantity</div>
          <div>Tax type</div>
        </div>
        {this.state.products.lenght <= 0 ? (
          <div>No products</div>
        ) : (
          this.state.products.map(product => (
            <div className="product">
              <div>{product.barcode}</div> <div>{product.name}</div>{" "}
              <div>{product.price}kn</div>{" "}
              <div>{product.availableQuantity}kom</div>{" "}
              <div>{product.taxType}</div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ProductsList;
