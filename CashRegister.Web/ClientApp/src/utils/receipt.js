import axios from "axios";

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
    .get("/api/receipts/get-by-id", {params: {id: receiptId}})
    .then(response => response.data);
};