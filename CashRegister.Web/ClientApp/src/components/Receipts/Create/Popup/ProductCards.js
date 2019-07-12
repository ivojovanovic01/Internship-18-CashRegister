import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = props => {
  const {
    products,
    changeProductInState,
    isSearched,
    receiptProducts,
    addProductOnReceipt
  } = props;
  if (!isSearched) return null;
  return products.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      changeProductInState={changeProductInState}
      addProductOnReceipt={addProductOnReceipt}
      isDisabled={receiptProducts.some(p => p.id === product.id)}
    />
  ));
};

export default ProductCards;
