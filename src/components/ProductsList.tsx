import React, { Component } from "react";
import Product from "./Product";

const PRODUCTS_LIST_URL = "http://localhost:4000/products";

type ProductsListProps = {}

type ProductsListState = {
  products: any[]
}

class ProductsList extends Component<ProductsListProps, ProductsListState> {
  constructor(props: ProductsListProps) {
    super(props);
    this.state = {
      products: []
    };

  }

  componentDidMount() {
    fetch(PRODUCTS_LIST_URL)
      .then((response) => {
        if (!response.ok) alert("error");
        else return response.json();
      })
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  }

  render() {
    return (
      <section className="section">
        <div className="columns is-multiline">
          {this.state.products.map((product) =>
            <div key={product.id.toString()} className="column is-one-fifth has-text-centered">
              <Product id={product.id} name={product.name} price={product.price} category={product.category} />
            </div>)
          }
        </div>
      </section>
    );
  }
}

export default ProductsList;
