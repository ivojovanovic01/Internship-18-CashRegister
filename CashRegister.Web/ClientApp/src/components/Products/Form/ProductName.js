import React from "react";
import { isNameValid } from "./../../../utils/product";

const ProductName = props => {
  const { product, handleChange } = props;
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
    </React.Fragment>
  );
};

export default ProductName;
