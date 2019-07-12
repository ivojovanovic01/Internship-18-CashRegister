import React from "react";
import ReceiptCard from "./ReceiptCard";

const ReceiptCards = props => {
  const { receipts } = props;
  return receipts.map(receipt => (
    <ReceiptCard key={receipt.id} receipt={receipt} />
  ));
};

export default ReceiptCards;
