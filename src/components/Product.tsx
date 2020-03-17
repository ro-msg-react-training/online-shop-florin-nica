import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
}

type Props = RouteComponentProps & ProductProps;

class Product extends Component<Props> {
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