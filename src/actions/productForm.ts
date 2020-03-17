import { ProductFormActionTypes } from "../types/IActions";
import { IProductDetails } from "../types/IProductDetails";
import { IProductForm } from "../types/IProductForm";

export const fillForm = (productDetails: IProductDetails): ProductFormActionTypes => ({
  type: "FILL_FORM",
  productDetails
});

export const updateProductState = (productData: IProductForm): ProductFormActionTypes => ({
  type: "UPDATE_PRODUCT_DATA_STATE",
  productData
});

export const saveProduct = (productData: IProductForm): ProductFormActionTypes => ({
  type: "SAVE_PRODUCT_DETAILS",
  productData
});

export const saveProductSuccess = (): ProductFormActionTypes => ({
  type: "SAVE_PRODUCT_DETAILS_SUCCESS"
});

export const saveProductError = (errorMessage: string): ProductFormActionTypes => ({
  type: "SAVE_PRODUCT_DETAILS_ERROR",
  errorMessage
});

export const cancelProductForm = (): ProductFormActionTypes => ({
  type: "CANCEL_PRODUCT_FORM"
});