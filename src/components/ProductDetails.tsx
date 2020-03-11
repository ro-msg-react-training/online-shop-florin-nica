import React, { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';

const PRODUCT_DETAILS_URL = "http://localhost:4000/products/"

type MatchProps = {
  id: string
}

type ProductDetailsProps = RouteComponentProps<MatchProps> & {
}

type ProductDetailsState = {
  product: any
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {
  constructor(props: ProductDetailsProps) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    fetch(PRODUCT_DETAILS_URL + this.props.match.params.id)
      .then((response) => {
        if (response.ok) { return response.json() }
        else if (response.status === 404) { alert("product not found") }
        else alert("error");
      })
      .then((data) => {
        this.setState({ product: data });
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  }

  deleteProduct() {
    fetch(PRODUCT_DETAILS_URL + this.props.match.params.id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) { this.props.history.push('/products') }
        else if (response.status === 404) { alert("product not found") }
        else alert("error");
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  }

  render() {
    if (this.state.product) {
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="image is-1by1">
                  <img src={this.state.product.image} alt={this.state.product.image} />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  {this.state.product.name}
                </h1>
                <h2 className="subtitle is-4">
                  {this.state.product.description}
                </h2>
                <br />
                <div className="container has-text-centered">
                  <button className="button is-medium is-primary">
                    Add to cart
                  </button>
                  <button className="button is-medium is-primary is-outlined" onClick={() => this.deleteProduct()}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ProductDetails;
