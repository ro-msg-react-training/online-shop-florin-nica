import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from "redux";
import { readProduct, readProductError, readProductSuccess, deleteProduct, deleteProductSuccess, deleteProductError } from "../actions/productDetails";
import { addProductToCart } from "../actions/shoppingCart";
import { AppState } from "../store";
import { IProductDetails } from "../types/IProductDetails";
import LoadingBar from "./LoadingBar";

const PRODUCT_DETAILS_URL = "http://localhost:4000/products/";

type MatchProps = {
  id: string;
};

type ProductDetailsProps = RouteComponentProps<MatchProps>;

type Props = ProductDetailsProps & LinkStateProps & LinkedDispatchProps;

class ProductDetails extends Component<Props> {

  componentDidMount() {
    this.props.startReadProductDetails();
    fetch(PRODUCT_DETAILS_URL + this.props.match.params.id)
      .then((response) => {
        if (response.ok) { return response.json(); }
        else if (response.status === 404) { this.props.startReadProductDetailsError("product not found"); }
        else this.props.startReadProductDetailsError("Error: " + response.status);
      })
      .then((data) => {
        this.props.startReadProductDetailsSuccess(data);
      })
      .catch((error) => {
        this.props.startReadProductDetailsError(error);
      });
  }

  addToCart() {
    if (this.props.productDetails) {
      this.props.addProductToCart(this.props.productDetails);
      this.props.history.push('/cart');
    }
  }

  deleteProduct() {
    fetch(PRODUCT_DETAILS_URL + this.props.match.params.id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) { this.props.history.push('/products'); }
        else if (response.status === 404) { this.props.startDeleteProductError("product not found"); }
        else this.props.startDeleteProductError("Error: " + response.status);
      })
      .catch((error) => {
        this.props.startDeleteProductError(error);
      });
  }

  editProduct() {
    this.props.history.push('/products/edit');
  }

  render() {
    if (this.props.productDetails) {
      return (
        <div>
          <LoadingBar isLoading={this.props.isLoading} />
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-vcentered">
                <div className="column is-4">
                  <figure className="image is-1by1">
                    <img src={this.props.productDetails.image} alt={this.props.productDetails.image} />
                  </figure>
                </div>
                <div className="column is-6 is-offset-1">
                  <h1 className="title is-2">
                    {this.props.productDetails.name}
                  </h1>
                  <h2 className="subtitle is-4">
                    {this.props.productDetails.description}
                  </h2>
                  <br />
                  <div className="container has-text-centered">
                    <button className="button is-medium is-primary" onClick={() => this.addToCart()}>
                      Add to cart
                  </button>
                    <button className="button is-medium is-primary is-outlined" onClick={() => this.deleteProduct()}>
                      Delete
                  </button>
                    <button className="button is-medium is-primary is-outlined" onClick={() => this.editProduct()}>
                      Edit
                  </button>
                  </div>
                </div>
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

interface LinkStateProps {
  productDetails?: IProductDetails,
  isLoading: boolean,
  errorMessage: string;
}

interface LinkedDispatchProps {
  addProductToCart: (product: IProductDetails) => void,
  startReadProductDetails: () => void,
  startReadProductDetailsSuccess: (product: IProductDetails) => void,
  startReadProductDetailsError: (error: string) => void,
  startDeleteProduct: (id: number) => void,
  startDeleteProductSuccess: () => void,
  startDeleteProductError: (error: string) => void;
}

const mapStateToProps = (state: AppState, props: ProductDetailsProps): LinkStateProps => ({
  productDetails: state.productDetails.product,
  isLoading: state.productDetails.isLoading,
  errorMessage: state.productDetails.error
});

const mapDispatchToProps = (dispatch: Dispatch, props: ProductDetailsProps): LinkedDispatchProps => ({
  addProductToCart: (product) => { dispatch(addProductToCart(product)); },
  startReadProductDetails: () => { dispatch(readProduct()); },
  startReadProductDetailsSuccess: (data) => { dispatch(readProductSuccess(data)); },
  startReadProductDetailsError: (error) => { dispatch(readProductError(error)); },
  startDeleteProduct: (id) => { dispatch(deleteProduct(id)); },
  startDeleteProductSuccess: () => { dispatch(deleteProductSuccess()); },
  startDeleteProductError: (error) => { dispatch(deleteProductError(error)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
