import { ICartItem } from "./ICartItem";
import { IProduct } from "./IProduct";
import { IProductDetails } from "./IProductDetails";
import { IProductForm } from "./IProductForm";

export const READ_PRODUCTS = "READ_PRODUCTS";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";
export const READ_PRODUCT_DETAILS = "READ_PRODUCT_DETAILS";
export const READ_PRODUCT_DETAILS_SUCCESS = "READ_PRODUCT_DETAILS_SUCCESS";
export const READ_PRODUCT_DETAILS_ERROR = "READ_PRODUCT_DETAILS_ERROR";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHECKOUT = "CHECKOUT";
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_ERROR = "CHECKOUT_ERROR";
export const FILL_FORM = "FILL_FORM";
export const UPDATE_PRODUCT_DATA_STATE = "UPDATE_PRODUCT_DATA_STATE";
export const SAVE_PRODUCT_DETAILS = "SAVE_PRODUCT_DETAILS";
export const SAVE_PRODUCT_DETAILS_SUCCESS = "SAVE_PRODUCT_DETAILS_SUCCESS";
export const SAVE_PRODUCT_DETAILS_ERROR = "SAVE_PRODUCT_DETAILS_ERROR";
export const CANCEL_PRODUCT_FORM = "CANCEL_PRODUCT_FORM";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export interface ReadProductsAction {
  type: typeof READ_PRODUCTS,
}

export interface ReadProductsSuccessAction {
  type: typeof READ_PRODUCTS_SUCCESS,
  products: IProduct[];
}

export interface ReadProductsErrorAction {
  type: typeof READ_PRODUCTS_ERROR,
  errorMessage: string;
}

export type ProductActionTypes = ReadProductsAction | ReadProductsSuccessAction | ReadProductsErrorAction;

export interface ReadProductDetailsAction {
  type: typeof READ_PRODUCT_DETAILS,
}

export interface ReadProductDetailsSuccessAction {
  type: typeof READ_PRODUCT_DETAILS_SUCCESS,
  product: IProductDetails;
}

export interface ReadProductDetailsErrorAction {
  type: typeof READ_PRODUCT_DETAILS_ERROR,
  errorMessage: string;
}

export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  id: number;
}

export interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
}

export interface DeleteProductErrorAction {
  type: typeof DELETE_PRODUCT_ERROR,
  errorMessage: string;
}

export type ProductDetailsActionTypes = ReadProductDetailsAction | ReadProductDetailsSuccessAction |
  ReadProductDetailsErrorAction | DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction;

export interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART,
  product: IProductDetails;
}

export interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT,
  productId: number;
}

export interface CheckoutAction {
  type: typeof CHECKOUT,
  products: ICartItem[];
}

export interface CheckoutSuccessAction {
  type: typeof CHECKOUT_SUCCESS;
}

export interface CheckoutErrorAction {
  type: typeof CHECKOUT_ERROR,
  errorMessage: string;
}

export type ShoppingCartActionTypes = AddProductToCartAction | RemoveProductAction | CheckoutAction |
  CheckoutSuccessAction | CheckoutErrorAction;

export interface FillFormAction {
  type: typeof FILL_FORM,
  productDetails: IProductDetails;
}

export interface UpdateProductDataStateAction {
  type: typeof UPDATE_PRODUCT_DATA_STATE,
  productData: IProductForm;
}

export interface SaveProductDetailsAction {
  type: typeof SAVE_PRODUCT_DETAILS,
  productData: IProductForm;
}

export interface SaveProductDetailsSuccessAction {
  type: typeof SAVE_PRODUCT_DETAILS_SUCCESS;
}

export interface SaveProductDetailsErrorAction {
  type: typeof SAVE_PRODUCT_DETAILS_ERROR,
  errorMessage: string;
}

export interface CancelProductFormAction {
  type: typeof CANCEL_PRODUCT_FORM;
}

export type ProductFormActionTypes = FillFormAction | UpdateProductDataStateAction |
  SaveProductDetailsAction | SaveProductDetailsSuccessAction | SaveProductDetailsErrorAction | CancelProductFormAction;

export interface UpdateProduct {
  type: typeof UPDATE_PRODUCT,
  productDetails: IProductDetails;
}

export type AppActions = ProductActionTypes | ProductDetailsActionTypes | ShoppingCartActionTypes |
  ProductFormActionTypes | UpdateProduct;
