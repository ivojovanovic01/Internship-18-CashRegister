import axios from "axios";
import moment from "moment";

export const getReceipts = (pageNumber, filterDate) => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  return axios
    .get("/api/receipts/filtered", {
      params: {
        cashRegisterId: token.cashRegisterId,
        pageNumber,
        filterDate
      }
    })
    .then(response => response.data);
};

export const getReceipt = receiptId => {
  return axios
    .get("/api/receipts/get-by-id", { params: { id: receiptId } })
    .then(response => response.data);
};

export const createReceipt = receipt => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  return axios
    .post("/api/receipts/add", {
      ...receipt,
      cashRegisterId: token.cashRegisterId,
      cashierId: token.cashierId
    })
    .then(response => response.data);
};

export const formatCreatedTime = createdTime => {
  return moment(createdTime).format("DD/MM/YYYY h:mm a");
};

export const isQuantitySufficient = (
  productAvailableQuantity,
  receiptProductQuantity
) => {
  return receiptProductQuantity <= productAvailableQuantity;
};

export const getTotalExciseTax = products => {
  let totalExciseTax = 0;
  products.forEach(product => {
    if (product.taxType === "Excise")
      totalExciseTax +=
        (product.price - product.price / 1.05) * product.quantity;
  });
  return roundOnTwoDecimalPlaces(totalExciseTax);
};

export const getTotalDirectTax = products => {
  let totalDirectTax = 0;
  products.forEach(product => {
    if (product.taxType === "Direct")
      totalDirectTax +=
        (product.price - product.price / 1.25) * product.quantity;
  });
  return roundOnTwoDecimalPlaces(totalDirectTax);
};

export const getTotalPrice = products => {
  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += product.price * product.quantity;
  });
  return roundOnTwoDecimalPlaces(totalPrice);
};

export const getTaxFreePrice = products => {
  var taxFreePrice = 0;
  products.forEach(product => {
    product.taxType === "Excise"
      ? (taxFreePrice += (product.price / 1.05) * product.quantity)
      : (taxFreePrice += (product.price / 1.25) * product.quantity);
  });
  return roundOnTwoDecimalPlaces(taxFreePrice);
};

const roundOnTwoDecimalPlaces = number => Math.round(number * 100) / 100;

export const receiptCashierFullName = cashier => {
  return `${cashier.firstName} ${cashier.lastName}`;
};

export const receiptSameProductsPrice = receiptProducts => {
  return receiptProducts.productQuantity * receiptProducts.productUnitPrice;
};

export const receiptPrintHTML = receipt => {
  return `<h1>Receipt</h1>
  <hr />
  <p>Cashier: ${receiptCashierFullName(receipt.cashier)}</p>
  <hr />
  ${receiptProductsForPrint(receipt)}
  <h2>Total price: ${receipt.totalPrice} kn</h2>
  <p>Total excise tax (5%): ${receipt.totalExciseTax} kn</p>
  <p>Total direct tax (25%): ${receipt.totalDirectTax} kn</p>
  <p>Price without tax: ${receipt.taxFreePrice} kn</p>
  <p>Receipt id: ${receipt.id}</p>
  <p>Created time: ${formatCreatedTime(receipt.createdTime)}</p>`;
};

const receiptProductsForPrint = receipt => {
  let productsHTML = "";
  if (receipt.receiptProducts.length > 0)
    receipt.receiptProducts.map(
      rp =>
        (productsHTML += `<div key=${
          rp.productId
        } class="receipt-product-details">
        <div class="product-name">${rp.product.name.toUpperCase()}</div>
        <div class="product-quantity">${rp.productQuantity}</div>
        <div class="product-unit-price">${rp.productUnitPrice}</div>
        <div class="product-price">${receiptSameProductsPrice(rp)}</div>
      </div>`)
    );
  return productsHTML;
};

export const receiptCSS = () => {
  return `.receipt-product-details div{
    display: inline-block;
    padding: 10px 0;
  }
  
  .receipt-product-details .product-name{
    width: 50%;
  }
  
  .receipt-product-details .product-quantity{
    width: 10%;
  }
  
  .receipt-product-details .product-unit-price,
  .receipt-product-details .product-price{
    width: 19%;
  }`;
};
