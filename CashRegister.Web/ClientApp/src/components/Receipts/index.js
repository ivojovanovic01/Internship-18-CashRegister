import React from "react";
import { Switch, Route } from "react-router-dom";
import ReceiptsList from "./List/ReceiptsList";
import ReceiptCreate from "./Create/ReceiptCreate";
import "./index.css";

const Receipts = () => {
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

export default Receipts;
