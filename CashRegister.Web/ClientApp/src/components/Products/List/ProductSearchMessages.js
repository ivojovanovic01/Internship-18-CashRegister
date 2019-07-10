import React from "react";

const ProductCards = props => {
  const { searchLength, isSearched, productsLength } = props;
  return (
    <React.Fragment>
      {searchLength < 3 && (
        <div className="serach-information">
          You need to enter at least 3 letters
        </div>
      )}
      {isSearched && !productsLength && searchLength >= 3 && (
        <div className="no-products-information">
          There is no searched products
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductCards;
