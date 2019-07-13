import React from "react";

const ProductNewQuantityInput = ({
  newQuantity,
  handleChange,
  maxQuantity
}) => {
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
      {(newQuantity <= 0 || maxQuantity < newQuantity) && (
        <div className="wrong-input-information">
          New quantity must be greater than 0 and smaller than {maxQuantity}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductNewQuantityInput;
