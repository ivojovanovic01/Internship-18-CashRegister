import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "./List/ProductsList";
import ProductCreate from "./Create/ProductCreate";
import ProductEdit from "./Edit/ProductEdit";
import "./index.css";

const Products = () => {
  return (
    <Switch>
      <Route
        exact
        path="/products"
        render={props => <ProductsList {...props} />}
      />
      <Route
        exact
        path="/products/create"
        render={props => <ProductCreate {...props} />}
      />
      <Route
        exact
        path="/products/edit/:id"
        render={props => <ProductEdit {...props} />}
      />
    </Switch>
  );
};

export default Products;
