import React from "react";

const ProductTaxType = props => {
  const { product, handleChange, taxTypes } = props;
  return (
    <React.Fragment>
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
};

export default ProductTaxType;
