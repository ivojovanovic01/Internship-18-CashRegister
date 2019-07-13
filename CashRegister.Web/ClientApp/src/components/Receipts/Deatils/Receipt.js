import React from "react";

const Receipt = ({receipt}) => {
    return(
        <React.Fragment>
        <h1>Receipt</h1>
        <p>Cashier: {receipt.cashier.firstName} {receipt.cashier.lastName}}</p>
        <p>Cash register: {receipt.cashRegister.name}</p>
        <p>Product name | Quantity | Product unit price | Price</p>
        {
            receipt.receiptProducts.map(rp => <p>{rp.product.name} {rp.productQuantity} {rp.productUnitPrice} {rp.productQuantity * rp.productUnitPrice}</p>)
        }
        <p></p>
        </React.Fragment>
    );
};

export default Receipt;
