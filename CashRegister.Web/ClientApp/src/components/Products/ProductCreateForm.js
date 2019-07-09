import React, { Component } from "react";
import {
  isBarcodeValid,
  isNameValid,
  isPriceValid,
  isQuantityValid,
  getProductTaxTypeEnumValues
} from "./../../utils/product";

class ProductCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxTypes: []
    };
  }

  componentDidMount() {
    const { setTaxTypeDefaultValue } = this.props;

    getProductTaxTypeEnumValues()
      .then(data => {
        this.setState(state => ({
          taxTypes: data
        }));
        setTaxTypeDefaultValue(data[0]);
      })
      .catch(() => alert("Problem with tax types"));
  }

  render() {
    const { taxTypes } = this.state;
    const {
      product,
      handleChange,
      handleChangeNumber,
      handleChangePrice
    } = this.props;

    return (
      <React.Fragment>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          maxLength="50"
          value={product.name}
          onChange={handleChange}
        />
        {!isNameValid(product.name) && (
          <div className="wrong-input-information">
            The name must have 3 or more characters
          </div>
        )}
        <p>Barcode: </p>
        <input
          type="text"
          name="barcode"
          maxLength="13"
          value={product.barcode}
          onChange={handleChangeNumber}
        />
        {!isBarcodeValid(product.barcode) && (
          <div className="wrong-input-information">
            The barcode must have 13 digits
          </div>
        )}
        <p>Product price: </p>
        <input
          type="text"
          name="price"
          maxLength="10"
          value={product.price}
          onChange={handleChangePrice}
        />
        {!isPriceValid(product.price) && (
          <div className="wrong-input-information">
            The price must be greater than 0 and in format xx.xx
          </div>
        )}
        <p>Available Quantity</p>
        <input
          type="text"
          name="availableQuantity"
          maxLength="10"
          value={product.availableQuantity || ""}
          onChange={handleChangeNumber}
        />
        {!isQuantityValid(product.availableQuantity) && (
          <div className="wrong-input-information">
            The available quantity must be greater than 0
          </div>
        )}
        <p>Tax type: </p>
        <select name="taxType" value={product.taxType} onChange={handleChange}>
          {taxTypes.length &&
            taxTypes.map((taxType, id) => (
              <option value={taxType} key={id}>
                {taxType}
              </option>
            ))}
        </select>
      </React.Fragment>
    );
  }
}

export default ProductCreateForm;
