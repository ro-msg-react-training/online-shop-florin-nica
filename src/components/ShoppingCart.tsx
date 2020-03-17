import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { ICartItem } from "../types/ICartItem";
import LoadingBar from "./LoadingBar";
import { removeProduct, checkout, checkoutSuccess, checkoutError } from "../actions/shoppingCart";

const CHECKOUT_URL = "http://localhost:4000/orders/";

type ShoppingCartProps = {};

type Props = ShoppingCartProps & LinkStateProps & LinkedDispatchProps;

class ShoppingCart extends Component<Props> {

  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  removeProduct(productId: number) {
    this.props.removeProduct(productId);
  }

  checkout() {
    this.props.checkout(this.props.items);
    this.postData(CHECKOUT_URL, this.props.items)
      .then((response) => {
        if (!response.ok) alert("error");
        else alert("orderd successful");
      })
      .catch((error) => {
        alert(error);
        this.props.checkoutError(error);
      });
  }

  render() {
    return (
      <div>
        <LoadingBar isLoading={this.props.isLoading} />
        <section className="section">
          <table className="table is-fullwidth is-striped">
            <thead>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Options</th>
            </thead>
            <tbody>
              {this.props.items.map((item) =>
                <tr key={item.product.id.toString()}>
                  <th>
                    <figure className="image is-1by1">
                      <img src={item.product.image} alt={item.product.image} />
                    </figure>
                  </th>
                  <th>{item.product.name}</th>
                  <th>{item.product.description}</th>
                  <th>{item.product.category}</th>
                  <th>${item.product.price}</th>
                  <th>{item.quantity}</th>
                  <th>
                    <button className="button is-small is-primary is-outlined" onClick={() => this.removeProduct(item.product.id)}>
                      Remove
                  </button>
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <section>
          <div className="container has-text-centered">
            <button className="button is-medium is-primary" onClick={() => this.checkout()}>
              Checkout
          </button>
          </div>
        </section>
      </div>
    );
  }
}

interface LinkStateProps {
  items: ICartItem[],
  isLoading: boolean,
  errorMessage: string;
}

interface LinkedDispatchProps {
  removeProduct: (productId: number) => void,
  checkout: (item: ICartItem[]) => void,
  checkoutSuccess: () => void,
  checkoutError: (error: string) => void,
}

const mapStateToProps = (state: AppState, props: ShoppingCartProps): LinkStateProps => ({
  items: state.shoppingCart.items,
  isLoading: state.shoppingCart.isLoading,
  errorMessage: state.shoppingCart.error
});

const mapDispatchToProps = (dispatch: Dispatch, props: ShoppingCartProps): LinkedDispatchProps => ({
  removeProduct: (productId) => { dispatch(removeProduct(productId)); },
  checkout: (items) => { dispatch(checkout(items)); },
  checkoutSuccess: () => { dispatch(checkoutSuccess()); },
  checkoutError: (error) => { dispatch(checkoutError(error)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
