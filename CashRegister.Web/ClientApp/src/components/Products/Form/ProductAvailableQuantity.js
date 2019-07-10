import React from "react";
import { isQuantityValid } from "./../../../utils/product";

const ProductAvailableQuantity = props => {
  const { product, handleChange } = props;
  return (
    <React.Fragment>
      <p>Available Quantity</p>
      <input
        type="text"
        name="availableQuantity"
        maxLength="10"
        value={product.availableQuantity}
        onChange={handleChange}
      />
      {!isQuantityValid(product.availableQuantity) && (
        <div className="wrong-input-information">
          The available quantity must be greater than 0
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductAvailableQuantity;
