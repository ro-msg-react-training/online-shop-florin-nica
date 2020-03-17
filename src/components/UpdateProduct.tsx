import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppState } from "../store";
import { IProductDetails } from "../types/IProductDetails";
import { IProductForm } from "../types/IProductForm";
import ProductForm from "./ProductForm";

const PRODUCT_DETAILS_URL = "http://localhost:4000/products/";

interface UpdateProductProps { }

type Props = UpdateProductProps & RouteComponentProps & LinkStateProps;

class UpdateProduct extends Component<Props> {

  onSubmit(product: IProductForm) {
    fetch(PRODUCT_DETAILS_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((response) => {
        if (!response.ok) alert("error");
        else alert("product updated successfuly");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="title has-text-centered">Update Product</h1>
        <ProductForm onSubmit={this.onSubmit} productDetails={this.props.productDetails} />
      </div >
    );
  }
}

interface LinkStateProps {
  productDetails?: IProductDetails;
}

const mapStateToProps = (state: AppState, props: UpdateProductProps): LinkStateProps => ({
  productDetails: state.productDetails.product
});

export default connect(mapStateToProps)(withRouter(UpdateProduct));
