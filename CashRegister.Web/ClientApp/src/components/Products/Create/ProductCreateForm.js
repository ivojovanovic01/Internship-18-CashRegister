import React, { Component } from "react";
import {
  getProductTaxTypeEnumValues,
  isProductNonValid
} from "./../../../utils/product";
import ProductName from "./../Form/ProductName";
import ProductBarcode from "./../Form/ProductBarcode";
import ProductPrice from "./../Form/ProductPrice";
import ProductAvailableQuantity from "./../Form/ProductAvailableQuantity";
import ProductTaxType from "./../Form/ProductTaxType";
import ProductSubmitBtn from "../Form/ProductSubmitBtn";

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
        this.setState({
          taxTypes: data
        });
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
      handleChangePrice,
      handleClick
    } = this.props;

    return (
      <div className="create-product-form">
        <ProductName product={product} handleChange={handleChange} />
        <ProductBarcode product={product} handleChange={handleChangeNumber} />
        <ProductPrice product={product} handleChange={handleChangePrice} />
        <ProductAvailableQuantity
          product={product}
          handleChange={handleChangeNumber}
        />
        <ProductTaxType
          product={product}
          taxTypes={taxTypes}
          handleChange={handleChange}
        />
        <ProductSubmitBtn
          product={product}
          handleClick={handleClick}
          isProductNonValid={isProductNonValid}
        />
      </div>
    );
  }
}

export default ProductCreateForm;
