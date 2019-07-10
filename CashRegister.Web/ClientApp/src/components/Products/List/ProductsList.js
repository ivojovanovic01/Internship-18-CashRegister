import React, { Component } from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { getSearchedProducts } from "../../../utils/product";
import ProductCards from "./ProductCards";
import ProductSearchMessages from "./ProductSearchMessages";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search: "",
      isSearched: false
    };
  }

  handleChangeSearch = e => {
    const { value } = e.target;
    if (value.length >= 3) {
      this.setState({ search: value, isSearched: false });
      this.debouncedSearch();
    } else this.setState({ products: [], search: "", isSearched: false });
  };

  debouncedSearch = debounce(
    () =>
      getSearchedProducts(this.state.search)
        .then(data => this.setState({ products: data, isSearched: true }))
        .catch(err => alert("I can not find products")),
    1000
  );

  changeProductInState = editedProduct => {
    const { products } = this.state;
    const productToEditId = products.findIndex(p => p.id === editedProduct.id);
    products[productToEditId].availableQuantity =
      editedProduct.availableQuantity;
    this.setState({ products });
  };

  render() {
    const { products, search, isSearched } = this.state;
    return (
      <div className="products">
        <Link to="products/create" className="product-create">
          create
        </Link>
        <h1>Products</h1>
        <input
          className="product-search"
          type="text"
          onChange={this.handleChangeSearch}
          placeholder={"search by name or barcode..."}
        />
        <ProductSearchMessages
          isSearched={isSearched}
          searchLength={search.length}
          productsLength={products.length}
        />
        <ProductCards
          products={products}
          isSearched={isSearched}
          changeProductInState={this.changeProductInState}
        />
      </div>
    );
  }
}

export default withRouter(ProductsList);
