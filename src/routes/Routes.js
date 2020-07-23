/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../components/home/Home';
import Checkout from '../components/checkout/Checkout';
import Login from '../components/login/Login';

// Productos
import ProductList from '../components/product/ProductList';
import NewProduct from '../components/product/NewProduct';
import Product from '../components/product/Product';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/addProduct" component={NewProduct} />
      <Route exact path="/product/:id" component={Product} />
    </Switch>
  );
}
