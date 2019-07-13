import React from "react";
import { isQuantityValid } from "./../../../utils/product";
import { isQuantitySufficient } from "../../../utils/receipt";

const ProductNewQuantitySubmitBtn = props => {
  const { newQuantity, handleClick, maxQuantity } = props;
  const btnClassName =
    isQuantityValid(newQuantity) &&
    isQuantitySufficient(maxQuantity, newQuantity)
      ? "new-quantity-valid-submit"
      : "new-quantity-non-valid-submit";

  return (
    <div className={btnClassName} onClick={() => handleClick(newQuantity)}>
      add quantity
    </div>
  );
};

export default ProductNewQuantitySubmitBtn;
