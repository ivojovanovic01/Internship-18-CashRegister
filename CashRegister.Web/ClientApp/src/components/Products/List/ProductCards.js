import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = props => {
  const { products, changeProductInState, isSearched } = props;
  return (
    isSearched &&
    products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        changeProductInState={changeProductInState}
      />
    ))
  );
};

export default ProductCards;
