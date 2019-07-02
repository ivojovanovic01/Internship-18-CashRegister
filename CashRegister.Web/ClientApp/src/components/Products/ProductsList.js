import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import { debounce } from "lodash";
import ProductAvailableQuantityPopup from "./ProductAvailableQuantityPopup";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search: "",
      showPopup: false,
      selectedProduct: {}
    };
  }

  componentDidMount() {
    //this.getAllProducts();
  }

  getAllProducts = () => {
    axios
      .get("/api/products/all")
      .then(response => this.setState({ products: response.data }))
      .catch(err => alert("I can not find products"));
  };

  getSearchedProducts = () => {
    axios
      .get("/api/products/search", {
        params: {
          search: this.state.search
        }
      })
      .then(response => this.setState({ products: response.data }))
      .catch(err => alert("I can not find products"));
  };

  handleChangeSearchInput = e => {
    const { value } = e.target;
    if (value.length >= 3) {
      this.setState({ search: value });
      this.debouncedSearch();
    } else this.setState({ products: [] });
  };

  togglePopup = product => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedProduct: product
    });
  };

  increaseQuantity = newQuantity => {
    const productToEdit = this.state.selectedProduct;
    productToEdit.availableQuantity += Number(newQuantity);
    this.setState({ selectedProduct: productToEdit });
    axios
      .post(
        "/api/products/increase-available-quantity",
        this.state.selectedProduct
      )
      .then(
        response =>
        this.setState({showPopup: false, selectedProduct: null})
      )
      .catch(err => alert("I can not find product"));
  };

  debouncedSearch = debounce(() => this.getSearchedProducts(), 1000);

  render() {
    return (
      <div className="products">
        <h1>All products</h1>
        <input
          type="text"
          onChange={this.handleChangeSearchInput}
          placeholder={"search by name or barcode..."}
        />
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
            <div className="product" key={product.id}>
              <div>{product.barcode}</div> <div>{product.name}</div>{" "}
              <div>{product.price}kn</div>{" "}
              <div>{product.availableQuantity}kom</div>{" "}
              <div>{product.taxType}</div>
              <div onClick={() => this.togglePopup(product)}>open popup</div>
            </div>
          ))
        )}
        {this.state.showPopup ? (
          <ProductAvailableQuantityPopup
            text="Close Me"
            closePopup={this.togglePopup}
            product={this.state.selectedProduct}
            increaseQuantity={this.increaseQuantity}
          />
        ) : null}
      </div>
    );
  }
}

export default ProductsList;
