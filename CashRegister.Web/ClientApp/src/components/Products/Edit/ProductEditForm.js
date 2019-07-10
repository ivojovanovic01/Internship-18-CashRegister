import React, { Component } from "react";
import { getProductTaxTypeEnumValues, isEditedProductNonValid } from "./../../../utils/product";
import ProductBarcode from "./../Form/ProductBarcode";
import ProductPrice from "./../Form/ProductPrice";
import ProductTaxType from "./../Form/ProductTaxType";
import ProductSubmitBtn from "./../Form/ProductSubmitBtn";

class ProductEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxTypes: []
    };
  }

  componentDidMount() {
    getProductTaxTypeEnumValues()
      .then(taxTypes =>
        this.setState({
          taxTypes
        })
      )
      .catch(() => alert("Problem with tax types"));
  }

  render() {
    const { taxTypes } = this.state;
    const {
      product,
      handleChange,
      handleChangeNumber,
      handleChangePrice,
      handleClick
    } = this.props;

    return (
      <div className="edit-product-form">
        <h1>{product.name}</h1>
        <ProductBarcode product={product} handleChange={handleChangeNumber} />
        <ProductPrice product={product} handleChange={handleChangePrice} />
        <p>Available Quantity {product.availableQuantity}</p>
        <ProductTaxType
          product={product}
          taxTypes={taxTypes}
          handleChange={handleChange}
        />
        <ProductSubmitBtn product={product} handleClick={handleClick} isProductNonValid={isEditedProductNonValid} />
      </div>
    );
  }
}

export default ProductEditForm;
