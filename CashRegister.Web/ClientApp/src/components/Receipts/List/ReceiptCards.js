import React from "react";
import ReceiptCard from "./ReceiptCard";

const ReceiptCards = ({ receipts }) => {
  return receipts.map(receipt => (
    <ReceiptCard key={receipt.id} receipt={receipt} />
  ));
};

export default ReceiptCards;
