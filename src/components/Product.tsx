import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from 'react-router-dom';

type ProductProps = RouteComponentProps & {
  id: number
  name: string,
  price: number,
  image: string
}

class Product extends React.Component<ProductProps> {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <figure className="image container is-128x128">
            <img src={this.props.image} alt={this.props.image} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{this.props.name}</p>
          <p className="subtitle is-6">${this.props.price}</p>
          <button className="button is-primary is-rounded" onClick={() => this.props.history.push(`/products/${this.props.id}`)}>Details</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
