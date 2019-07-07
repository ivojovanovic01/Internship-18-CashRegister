import React, { Component } from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  return (
      <div className="product-details">
        <h1>{props.product.name}</h1>
        <h2>Barcode: {props.product.barcode}</h2>
        <p>Price: {props.product.price}kn</p>
        <p>Available quantity: {props.product.availableQuantity}kom</p>
        <p>Tax type: {props.product.taxType.toLowerCase()}</p>
      </div>
    );
}

export default ProductDetails;
