import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { readProducts, readProductsSuccess, readProductsError } from "../actions/product";
import { AppState } from "../store";
import { IProduct } from "../types/IProduct";
import LoadingBar from "./LoadingBar";
import Product from "./Product";

const PRODUCTS_LIST_URL = "http://localhost:4000/products";

interface ProductsListProps {
}

type Props = RouteComponentProps & LinkStateProps & LinkedDispatchProps;

class ProductsList extends Component<Props> {

  componentDidMount() {
    this.props.startReadProducts();
    fetch(PRODUCTS_LIST_URL)
      .then((response) => {
        if (!response.ok) this.props.startReadProductsError("Error: " + response.status);
        else return response.json();
      })
      .then((data) => {
        this.props.startReadProductsSuccess(data);
      })
      .catch((error) => {
        this.props.startReadProductsError(error);
      });
  }

  render() {
    return (
      <section className="section">
        <LoadingBar isLoading={this.props.isLoading} />
        <button className="button is-primary is-outlined is-rounded"
          onClick={() => this.props.history.push("/products/new")}>
          Add Product
                </button>
        <div className="columns is-multiline">
          {this.props.products.map((product) =>
            <div key={product.id.toString()} className="column is-one-fifth has-text-centered">
              <Product id={product.id} name={product.name} price={product.price} category={product.category} />
            </div>)
          }
        </div>
      </section>
    );
  }
}

interface LinkStateProps {
  products: IProduct[],
  isLoading: boolean,
  errorMessage: string;
}

interface LinkedDispatchProps {
  startReadProducts: () => void,
  startReadProductsSuccess: (products: IProduct[]) => void,
  startReadProductsError: (error: string) => void,
}

const mapStateToProps = (state: AppState, props: ProductsListProps): LinkStateProps => ({
  products: state.product.products,
  isLoading: state.product.isLoading,
  errorMessage: state.product.error
});

const mapDispatchToProps = (dispatch: Dispatch, props: ProductsListProps): LinkedDispatchProps => ({
  startReadProducts: () => { dispatch(readProducts()); },
  startReadProductsSuccess: (data) => { dispatch(readProductsSuccess(data)); },
  startReadProductsError: (error) => { dispatch(readProductsError(error)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsList));
