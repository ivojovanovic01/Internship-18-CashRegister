import React, { Component } from "react";
import { debounce } from "lodash";
import { getSearchedProducts } from "./../../../../utils/product";
import ProductSearchMessages from "./../../../../components/Products/List/ProductSearchMessages";
import ProductCards from "./ProductCards";

class ProductAddPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search: "",
      isSearched: false,
      showQuantityPopup: false,
      selectedProduct: null,
      isChecked: false
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  handleChangeSearch = e => {
    const { value } = e.target;
    if (value.length >= 3) {
      this.setState({ search: value, isSearched: false });
      this.debouncedSearch();
    } else this.setState({ products: [], search: "", isSearched: false });
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && !this.state.showQuantityPopup)
      this.setState({ showQuantityPopup: true });
  };

  handleChangeChecked = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  debouncedSearch = debounce(
    () =>
      getSearchedProducts(this.state.search)
        .then(data => this.setState({ products: data, isSearched: true }))
        .catch(() => alert("I can not find products")),
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
    const { showPopup, closePopup, addProductOnReceipt } = this.props;
    if (!showPopup) return null;

    const { isSearched, search, products } = this.state;
    return (
      <div className="product-add-popup">
        <div className="product-add-popup_inner">
          <div className="close-popup" onClick={closePopup}>
            x
          </div>
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
            receiptProducts={this.props.products}
            changeProductInState={this.changeProductInState}
            isSearched={isSearched}
            addProductOnReceipt={addProductOnReceipt}
          />
        </div>
      </div>
    );
  }
}

export default ProductAddPopup;
