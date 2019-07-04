import React from "react";
import { Switch, Route } from "react-router-dom";
import ReceiptsList from "./ReceiptsList";
import ReceiptCreate from "./ReceiptCreate";
import "./index.css";

const Products = () => {
  return (
    <Switch>
      <Route
        exact
        path="/receipts"
        render={props => <ReceiptsList {...props} />}
      />
      <Route
        exact
        path="/receipts/create"
        render={props => <ReceiptCreate {...props} />}
      />
    </Switch>
  );
};

export default Products;
