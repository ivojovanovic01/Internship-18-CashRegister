import React from "react";
import { Link } from "react-router-dom";

const ProductDetailsBtns = props => {
  const { productId, togglePopup } = props;
  return (
    <div className="product-btns">
      <Link className="product-edit" to={`/products/edit/${productId}`}>
        edit
      </Link>
      <div className="product-available-quantity" onClick={togglePopup}>
        increase AQ
      </div>
    </div>
  );
};

export default ProductDetailsBtns;
