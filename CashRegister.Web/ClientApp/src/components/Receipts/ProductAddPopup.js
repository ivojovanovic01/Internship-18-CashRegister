import React, { Component } from "react";
import { debounce } from "lodash";
import { getSearchedProducts } from "./../../utils/product";
import Product from "./Product";

class ProductAddPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], search: "", showQuantityPopup: false, selectedProduct: null, isChecked: false };
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
    const { products } = this.state;
    const productToEditId = products.findIndex(p => p.id === editedProduct.id);
    products[productToEditId].availableQuantity =
      editedProduct.availableQuantity;
    this.setState({ products });
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && !this.state.showQuantityPopup)
      this.setState({ showQuantityPopup: true });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <div className="popup">
        <div className="products_popup_inner">
          <h1>All products</h1>
          <input
            type="text"
            onChange={this.handleChangeSearchInput}
            placeholder={"search by name or barcode..."}
          />
          {this.state.products === [] ? (
            <div>No products</div>
          ) : (
            this.state.products.map(product => (
                (this.props.products.some(p => p.id === product.id))?<Product key={product.id} product={product} addProductOnReceipt={this.props.addProductOnReceipt} isDisabled={true}/> : <Product key={product.id} product={product} addProductOnReceipt={this.props.addProductOnReceipt} isDisabled={false}/>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ProductAddPopup;
