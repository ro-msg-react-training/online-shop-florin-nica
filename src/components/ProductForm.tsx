import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { cancelProductForm, fillForm, saveProduct, saveProductError, saveProductSuccess, updateProductState } from "../actions/productForm";
import { AppState } from "../store";
import { IProductDetails } from "../types/IProductDetails";
import { IProductForm } from "../types/IProductForm";
import { IProductFormErrors } from "../types/IProductFormErrors";

interface ProductFormProps {
  onSubmit: (productData: IProductForm) => void;
  productDetails?: IProductDetails;
}

type Props = RouteComponentProps & ProductFormProps & LinkStateProps & LinkedDispatchProps;

class ProductForm extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.productDetails) {
      this.props.fillForm(this.props.productDetails);
    }
  }

  componentWillUnmount() {
    this.props.startCancelProduct();
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.onSubmit(this.props.productData);
  }

  handleChange(e: any) {
    e.preventDefault();
    this.props.updateProductDataState({
      ...this.props.productData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    } as IProductForm);
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={this.props.productData.name}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger">{this.props.errors.nameError}</p>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Category"
              name="category"
              value={this.props.productData.category}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger">{this.props.errors.categoryError}</p>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Description"
              name="description"
              value={this.props.productData.description}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger">{this.props.errors.descriptionError}</p>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input"
              type="number"
              placeholder="Price"
              name="price"
              value={this.props.productData.price}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger">{this.props.errors.priceError}</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" type="submit">Submit</button>
          </div>
          <div className="control">
            <button className="button is-primary is-outlined" type="reset" onClick={() => this.props.history.goBack()}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

interface LinkStateProps {
  productData: IProductForm,
  errors: IProductFormErrors;
}

interface LinkedDispatchProps {
  fillForm: (productDetails: IProductDetails) => void;
  updateProductDataState: (productData: IProductForm) => void;
  startSaveProductDetails: (productData: IProductForm) => void,
  startSaveProductDetailsSuccess: () => void,
  startSaveProductDetailsError: (error: string) => void,
  startCancelProduct: () => void,
}

const mapStateToProps = (state: AppState, props: ProductFormProps): LinkStateProps => ({
  productData: state.productForm.productData,
  errors: state.productForm.errors
});

const mapDispatchToProps = (dispatch: Dispatch, props: ProductFormProps): LinkedDispatchProps => ({
  fillForm: (productDetails) => { dispatch(fillForm(productDetails)); },
  updateProductDataState: (productData) => { dispatch(updateProductState(productData)); },
  startSaveProductDetails: (productDetails) => { dispatch(saveProduct(productDetails)); },
  startSaveProductDetailsSuccess: () => { dispatch(saveProductSuccess()); },
  startSaveProductDetailsError: (error: string) => { dispatch(saveProductError(error)); },
  startCancelProduct: () => { dispatch(cancelProductForm()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductForm));
