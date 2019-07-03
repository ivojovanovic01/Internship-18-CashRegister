import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";
import ProductsList from "./ProductsList";

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
