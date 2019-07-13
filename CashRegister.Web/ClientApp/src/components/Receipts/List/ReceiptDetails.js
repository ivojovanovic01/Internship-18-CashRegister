import React from "react";
import {
  formatCreatedTime,
  receiptCashierFullName,
  receiptSameProductsPrice
} from "../../../utils/receipt";

const ReceiptDetails = ({ receipt }) => {
  return (
    <React.Fragment>
      <h1>Receipt</h1>
      <hr />
      <p>Cashier: {receiptCashierFullName(receipt.cashier)}</p>
      <hr />
      {receipt.receiptProducts.length > 0 &&
        receipt.receiptProducts.map(rp => (
          <div key={rp.productId} className="receipt-product-details">
            <div className="product-name">{rp.product.name.toUpperCase()}</div>
            <div className="product-quantity">{rp.productQuantity}</div>
            <div className="product-unit-price">{rp.productUnitPrice}</div>
            <div className="product-price">{receiptSameProductsPrice(rp)}</div>
          </div>
        ))}
      <h2>Total price: {receipt.totalPrice} kn</h2>
      <p>Total excise tax (5%): {receipt.totalExciseTax} kn</p>
      <p>Total direct tax (25%): {receipt.totalDirectTax} kn</p>
      <p>Price without tax: {receipt.taxFreePrice} kn</p>
      <p>Receipt id: {receipt.id}</p>
      <p>Created time: {formatCreatedTime(receipt.createdTime)}</p>
    </React.Fragment>
  );
};

export default ReceiptDetails;
