import axios from "axios";

export const getReceipts = pageNumber => {
    const loggedAccount = JSON.parse(localStorage.getItem("account"));
    console.log(pageNumber)
  return axios
    .get("/api/receipts/filtered", {
      params: {
        cashierId: loggedAccount.cashierId,
        cashRegisterId: loggedAccount.cashRegisterId,
        pageNumber
      }
    })
    .then(response => response.data);
};

export const getReceipt = receiptId => {
  return axios
    .get("/api/receipts/get-by-id", {params: {id: receiptId}})
    .then(response => response.data);
};