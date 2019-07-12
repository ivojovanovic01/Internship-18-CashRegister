import axios from "axios";
import moment from "moment";

export const getReceipts = (pageNumber, filterDate) => {
  const loggedAccount = JSON.parse(localStorage.getItem("account"));
  return axios
    .get("/api/receipts/filtered", {
      params: {
        cashierId: loggedAccount.cashierId,
        cashRegisterId: loggedAccount.cashRegisterId,
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

export const formatCreatedTime = createdTime => {
  return moment(createdTime).format("DD/MM/YYYY h:mm a");
};

export const isQuantitySufficient  = (
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
  return totalExciseTax;
};

export const getTotalDirectTax = products => {
  let totalDirectTax = 0;
  products.forEach(product => {
    if (product.taxType === "Direct")
      totalDirectTax +=
        (product.price - product.price / 1.25) * product.quantity;
  });
  return totalDirectTax.toFixed(2);
};

export const getTotalPrice = products => {
  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice.toFixed(2);
};

export const getTaxFreePrice = products => {
  var taxFreePrice = 0;
  products.forEach(product => {
    product.taxType === "Excise"
      ? (taxFreePrice += (product.price / 1.05) * product.quantity)
      : (taxFreePrice += (product.price / 1.25) * product.quantity);
  });
  return taxFreePrice.toFixed(2);
};
