import React, { Component } from "react";
import "./index.css";
import { debounce } from "lodash";
import { getSearchedProducts } from "./../../utils/product";
import ProductDetails from "./ProductDetails";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search: ""
    };
  }

  handleChangeSearchInput = e => {
    const { value } = e.target;
    if (value.length >= 3) {
      this.setState({ search: value });
      this.debouncedSearch();
    } else this.setState({ products: [] });
  };

  debouncedSearch = debounce(
    () =>
      getSearchedProducts(this.state.search)
        .then(data => this.setState({ products: data }))
        .catch(err => alert("I can not find product")),
    1000
  );

  changeProductInState = editedProduct => {
    const {products} = this.state;
    const productToEditId = products.findIndex(p => p.id === editedProduct.id);
    products[productToEditId].availableQuantity = editedProduct.availableQuantity;
    this.setState({products})
  };

  render() {
    return (
      <div className="products">
        <h1>All products</h1>
        <input
          type="text"
          onChange={this.handleChangeSearchInput}
          placeholder={"search by name or barcode..."}
        />
        {this.state.products.lenght <= 0 ? (
          <div>No products</div>
        ) : (
          this.state.products.map(product => (
            <ProductDetails
              key={product.id}
              product={product}
              changeProductInState={this.changeProductInState}
            />
          ))
        )}
      </div>
    );
  }
}

export default ProductsList;