import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProductsMenu from "./ProductsMenu";
import ProductDetails from "./ProductDetails";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";
import ProductsList from "./ProductsList";

class Products extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/products" render={props => <ProductsMenu {...props} />} />
          <Route
            exact
            path="/products/all"
            render={props => <ProductsList {...props} />}
          />
          <Route
            exact
            path="/products/create"
            render={props => <ProductCreate {...props} />}
          />
          <Route
            exact
            path="/products/:id"
            render={props => <ProductDetails {...props} />}
          />
          <Route
            exact
            path="/products/edit/:id"
            render={props => <ProductEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Products;
