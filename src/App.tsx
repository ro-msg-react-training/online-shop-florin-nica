import React, { Component } from 'react';
import './App.scss';
import ProductsList from './components/ProductsList';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/products/:id' render={(matchProps) =>
            <ProductDetails
              {...matchProps} />
          } />
          <Route path="/products">
            <ProductsList />
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
