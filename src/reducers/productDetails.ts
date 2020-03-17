import { ProductDetailsActionTypes } from "../types/IActions";
import { IProductDetails } from "../types/IProductDetails";

interface IProductDetailsState {
  readonly product?: IProductDetails;
  readonly isLoading: boolean;
  readonly error: string;
}

const productReducerDefaultState: IProductDetailsState = {
  isLoading: false,
  error: ''
};

function productDetailsReducer(state = productReducerDefaultState, action: ProductDetailsActionTypes): IProductDetailsState {
  switch (action.type) {
    case "READ_PRODUCT_DETAILS":
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case "READ_PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        product: action.product
      };
    case "READ_PRODUCT_DETAILS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.errorMessage
      };
    default:
      return state;
  }
}

export { productDetailsReducer };

