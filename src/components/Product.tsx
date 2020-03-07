import React from "react";

type ProductProps = {
  name: string,
  description: string,
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
          <button className="button is-primary is-rounded">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
