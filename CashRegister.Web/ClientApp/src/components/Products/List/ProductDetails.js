import React from "react";

const ProductDetails = props => {
  const { product } = props;
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <h2>Barcode: {product.barcode}</h2>
      <p>Price: {product.price}kn</p>
      <p>Available quantity: {product.availableQuantity}kom</p>
      <p>Tax type: {product.taxType.toLowerCase()}</p>
    </div>
  );
};

export default ProductDetails;
