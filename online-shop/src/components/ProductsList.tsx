import React from "react";
import Product from "./Product"

const products = [
  {
    id: 0,
    name: 'Macbook Pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    price: 1550
  },
  {
    id: 1,
    name: 'Iphone',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 1000
  },
  {
    id: 2,
    name: 'Airpods',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    price: 200
  },
  {
    id: 3,
    name: 'Ipad Pro',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    price: 800
  }
]

class ProductsList extends React.Component {
  render() {
    return (
      <div className="Row">
        {products.map((product) =>
          <div key={product.id.toString()} className="Column">
            <Product name={product.name} description={product.description} price={product.price} />
          </div>)
        }
      </div>
    );
  }
}

export default ProductsList;
