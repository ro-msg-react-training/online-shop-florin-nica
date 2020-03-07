import React from "react";
import Product from "./Product"
import MacbookPro from "../assets/macbook.jpeg"
import Iphone11Pro from "../assets/iphone11pro.jpeg"
import Airpods from "../assets/airpods.jpeg"
import IpadPro from "../assets/ipadPro.jpeg"

const products = [
  {
    id: 0,
    name: 'Macbook Pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    price: 1550,
    image: MacbookPro
  },
  {
    id: 1,
    name: 'Iphone 11 Pro',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 1000,
    image: Iphone11Pro
  },
  {
    id: 2,
    name: 'Airpods',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    price: 200,
    image: Airpods
  },
  {
    id: 3,
    name: 'Ipad Pro',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    price: 800,
    image: IpadPro
  }
]

class ProductsList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="columns">
          {products.map((product) =>
            <div key={product.id.toString()} className="column is-one-fifth has-text-centered">
              <Product name={product.name} description={product.description} price={product.price} image={product.image} />
            </div>)
          }
        </div>
      </section>
    );
  }
}

export default ProductsList;
