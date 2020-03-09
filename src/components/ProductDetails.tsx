import React from "react";
import MacbookPro from "../assets/macbook.jpeg";
import Iphone11Pro from "../assets/iphone11pro.jpeg";
import Airpods from "../assets/airpods.jpeg";
import IpadPro from "../assets/ipadPro.jpeg";
import { RouteComponentProps } from 'react-router-dom';

const productsDetails = [
  {
    id: 0,
    name: 'Macbook Pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 1550,
    image: MacbookPro
  },
  {
    id: 1,
    name: 'Iphone 11 Pro',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 1000,
    image: Iphone11Pro
  },
  {
    id: 2,
    name: 'Airpods',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 200,
    image: Airpods
  },
  {
    id: 3,
    name: 'Ipad Pro',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    price: 800,
    image: IpadPro
  }
]

interface MatchProps {
  id: string
}

interface ProductDetailsProps extends RouteComponentProps<MatchProps> {
}

class ProductDetails extends React.Component<ProductDetailsProps> {
  product = productsDetails.find(product => product.id === parseInt(this.props.match.params.id));

  render() {
    if (this.product) {
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="image is-1by1">
                  <img src={this.product.image} alt={this.product.image} />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  {this.product.name}
                </h1>
                <h2 className="subtitle is-4">
                  {this.product.description}
                </h2>
                <br />
                <p className="has-text-centered">
                  <button className="button is-medium is-primary is-outlined">
                    Add to cart
                  </button>
                </p>
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
