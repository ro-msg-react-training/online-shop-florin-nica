import React, { Component } from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IProductForm } from "../types/IProductForm";
import ProductForm from "./ProductForm";

const PRODUCT_DETAILS_URL = "http://localhost:4000/products/";

type Props = RouteComponentProps;

class UpdateProduct extends Component<Props> {

  onSubmit(product: IProductForm) {
    fetch(PRODUCT_DETAILS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((response) => {
        if (!response.ok) alert("error");
        else alert("product created successfuly");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="title has-text-centered">New Product</h1>
        <ProductForm onSubmit={this.onSubmit} />
      </div >
    );
  }
}

export default withRouter(UpdateProduct);
