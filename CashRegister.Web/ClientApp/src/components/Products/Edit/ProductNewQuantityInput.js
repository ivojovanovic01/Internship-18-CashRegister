import React from "react";

const ProductNewQuantityInput = props => {
  const { newQuantity, handleChange } = props;

  return (
    <React.Fragment>
      <input
        type="text"
        className="new-quantity-input"
        name="newQuantity"
        maxLength="10"
        value={newQuantity}
        onChange={handleChange}
      />
      {newQuantity <= 0 && (
        <div className="wrong-input-information">
          New quantity must be greater than 0
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductNewQuantityInput;
