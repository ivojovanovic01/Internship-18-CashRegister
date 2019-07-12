import React from "react";
import { formatCreatedTime } from "../../../utils/receipt";

const ReceiptDetails = ({ receipt }) => {
  return (
    <div className="receipt-details">
      <h1>{receipt.id}</h1>
      <p>Created time: {formatCreatedTime(receipt.createdTime)}</p>
      {receipt.receiptProducts.length > 0 &&
        receipt.receiptProducts.map(rp => (
          <p key={rp.productId}>
            {rp.product.name} {rp.productQuantity}
          </p>
        ))}
      <p>Price without tax: {receipt.taxFreePrice}</p>
      <p>Total excise tax: {receipt.totalExciseTax}</p>
      <p>Total direct tax: {receipt.totalDirectTax}</p>
      <p>Total price: {receipt.totalPrice}</p>
    </div>
  );
};

export default ReceiptDetails;
