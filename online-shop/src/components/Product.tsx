import React from "react";

type ProductProps = {
  name: string,
  description: string,
  price: number
}

class Product extends React.Component<ProductProps> {
  render() {
    return (
      <div className="Product">
        <h1>{this.props.name}</h1>
        <p className="Price">${this.props.price}</p>
        <p>{this.props.description}</p>
        <button> Add to Cart</button>
      </div>
    );
  }
}

export default Product;
