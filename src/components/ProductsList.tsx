import React from "react";
import Product from "./Product";
import MacbookPro from "../assets/macbook.jpeg";
import Iphone11Pro from "../assets/iphone11pro.jpeg";
import Airpods from "../assets/airpods.jpeg";
import IpadPro from "../assets/ipadPro.jpeg";

const products = [
  {
    id: 0,
    name: 'Macbook Pro',
    price: 1550,
    image: MacbookPro
  },
  {
    id: 1,
    name: 'Iphone 11 Pro',
    price: 1000,
    image: Iphone11Pro
  },
  {
    id: 2,
    name: 'Airpods',
    price: 200,
    image: Airpods
  },
  {
    id: 3,
    name: 'Ipad Pro',
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
              <Product id={product.id} name={product.name} price={product.price} image={product.image} />
            </div>)
          }
        </div>
      </section>
    );
  }
}

export default ProductsList;
