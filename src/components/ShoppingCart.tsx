import React, { Component } from "react";

const CHECKOUT_URL = "http://localhost:4000/orders/"

type ShoppingCartProps = {}

type ShoppingCartState = {
  orderedProducts: []
}

class ShoppingCart extends Component<ShoppingCartProps, ShoppingCartState> {
  constructor(props: ShoppingCartProps) {
    super(props);
    this.state = {
      orderedProducts: []
    }
  }

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

  checkout() {
    this.postData(CHECKOUT_URL, this.state.orderedProducts)
      .then((response) => {
        if (!response.ok) alert("error");
        else alert("orders successful");
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  }

  render() {
    return (
      <section className="section">
        <div className="container has-text-centered">
          <button className="button is-medium is-primary" onClick={() => { this.checkout(); console.log('checkout clicked') }}>Checkout</button>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
