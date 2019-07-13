import React from "react";

const ReceiptMessage = ({ isLoading, receiptsLength }) => {
  if (isLoading) return <div>Loading...</div>;
  else if (!receiptsLength)
    return (
      <div className="no-receipts-information">There is no that receipts</div>
    );
  return null;
};

export default ReceiptMessage;
