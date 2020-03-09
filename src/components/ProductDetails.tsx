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
        <div className="card">
          <div className="card-content">
            <figure className="image container is-128x128">
              <img src={this.product.image} alt={this.product.image} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{this.product.name}</p>
            <p className="subtitle is-6">${this.product.price}</p>
            <p>{this.product.description}</p>
            <button className="button is-primary is-rounded">Add to cart</button>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}


export default ProductDetails;
