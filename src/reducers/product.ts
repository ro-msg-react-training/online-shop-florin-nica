import { ProductActionTypes } from "../types/IActions";
import { IProduct } from "../types/IProduct";

interface IProductState {
  readonly products: IProduct[];
  readonly isLoading: boolean;
  readonly error: string;
}

const productReducerDefaultState: IProductState = {
  products: [],
  isLoading: false,
  error: ''
};

function productReducer(state = productReducerDefaultState, action: ProductActionTypes): IProductState {
  switch (action.type) {
    case "READ_PRODUCTS":
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case "READ_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.products
      };
    case "READ_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.errorMessage
      };
    default:
      return state;
  }
}

export { productReducer };
