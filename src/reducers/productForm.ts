import { ProductFormActionTypes } from "../types/IActions";
import { IProductForm } from "../types/IProductForm";
import { IProductFormErrors } from "../types/IProductFormErrors";

interface IProductFormState {
  readonly productData: IProductForm;
  readonly isLoading: boolean;
  readonly error: string;
  readonly errors: IProductFormErrors;
}

const emptyFormData = {
  name: '',
  category: '',
  description: '',
  price: 0
};

const emptyErrors = {
  nameError: '',
  categoryError: '',
  descriptionError: '',
  priceError: ''
};

const productReducerDefaultState: IProductFormState = {
  productData: emptyFormData,
  isLoading: false,
  error: '',
  errors: emptyErrors
};

function productFormReducer(state = productReducerDefaultState, action: ProductFormActionTypes): IProductFormState {
  switch (action.type) {
    case "FILL_FORM":
      return {
        ...state,
        productData: {
          id: action.productDetails.id,
          name: action.productDetails.name,
          category: action.productDetails.category,
          description: action.productDetails.description,
          price: action.productDetails.price
        }
      };
    case "UPDATE_PRODUCT_DATA_STATE":
      return {
        ...state,
        productData: action.productData,
        error: ''
      };
    case "SAVE_PRODUCT_DETAILS":
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case "SAVE_PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        isLoading: false
      };
    case "SAVE_PRODUCT_DETAILS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.errorMessage
      };
    case "CANCEL_PRODUCT_FORM":
      return {
        ...state,
        productData: emptyFormData
      };
    default:
      return state;
  };
}

export { productFormReducer };
