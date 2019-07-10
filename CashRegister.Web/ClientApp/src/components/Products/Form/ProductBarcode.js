import React from "react";
import { isBarcodeValid } from "./../../../utils/product";

const ProductBarcode = props => {
  const { product, handleChange } = props;
  return (
    <React.Fragment>
      <p>Barcode: </p>
      <input
        type="text"
        name="barcode"
        maxLength="13"
        value={product.barcode}
        onChange={handleChange}
      />
      {!isBarcodeValid(product.barcode) && (
        <div className="wrong-input-information">
          The barcode must have 13 digits
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductBarcode;
