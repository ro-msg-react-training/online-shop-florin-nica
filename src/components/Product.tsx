import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from 'react-router-dom';

type ProductProps = RouteComponentProps & {
  id: number
  name: string,
  category: string,
  price: number
}

class Product extends Component<ProductProps> {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p className="title is-4">{this.props.name}</p>
          <p className="subtitle is-6">${this.props.price}</p>
          <p className="subtitle is-8">{this.props.category}</p>
          <button className="button is-primary is-rounded" onClick={() => this.props.history.push(`/products/${this.props.id}`)}>Details</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
