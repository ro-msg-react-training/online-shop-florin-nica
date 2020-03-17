import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/products/edit'>
            <UpdateProduct />
          </Route >
          <Route path='/products/new'>
            <NewProduct />
          </Route >
          <Route path='/products/:id' render={(matchProps) =>
            <ProductDetails
              {...matchProps} />
          } />
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/">
            <Redirect to='/products' />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
