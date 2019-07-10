import React from "react";

const ProductSubmitBtn = props => {
  const { handleClick, product, isProductNonValid } = props;
  return (
    <React.Fragment>
      {isProductNonValid(product) ? (
        <input
          type="submit"
          className="non-valid-product-submit"
          onClick={handleClick}
        />
      ) : (
        <input
          type="submit"
          className="valid-product-submit"
          onClick={handleClick}
        />
      )}
    </React.Fragment>
  );
};

export default ProductSubmitBtn;
