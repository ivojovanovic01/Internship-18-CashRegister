import React from "react";
import { isPriceValid } from "./../../../utils/product";

const ProductPrice = props => {
  const { product, handleChange } = props;
  return (
    <React.Fragment>
      <p>Product price: </p>
      <input
        type="text"
        name="price"
        maxLength="10"
        value={product.price}
        onChange={handleChange}
      />
      {!isPriceValid(product.price) && (
        <div className="wrong-input-information">
          The price must be greater than 0 and in format xx.xx
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductPrice;
