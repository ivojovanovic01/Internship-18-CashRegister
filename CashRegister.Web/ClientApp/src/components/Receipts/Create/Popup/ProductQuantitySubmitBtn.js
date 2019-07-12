import React from "react";
import { isQuantityValid } from "./../../../../utils/product";

const ProductQuantitySubmitBtn = props => {
  const { newQuantity, increaseAvailableQuantity } = props;
  const btnClassName = isQuantityValid(newQuantity)
    ? "new-quantity-valid-submit"
    : "new-quantity-non-valid-submit";

  return (
    <div
      className={btnClassName}
      onClick={() => increaseAvailableQuantity(newQuantity)}
    >
      add quantity
    </div>
  );
};

export default ProductQuantitySubmitBtn;
