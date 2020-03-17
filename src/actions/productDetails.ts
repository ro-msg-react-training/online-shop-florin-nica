import { ProductDetailsActionTypes } from "../types/IActions";
import { IProductDetails } from "../types/IProductDetails";

export const readProduct = (): ProductDetailsActionTypes => ({
    type: "READ_PRODUCT_DETAILS"
});

export const readProductSuccess = (product: IProductDetails): ProductDetailsActionTypes => ({
    type: "READ_PRODUCT_DETAILS_SUCCESS",
    product
});

export const readProductError = (errorMessage: string): ProductDetailsActionTypes => ({
    type: "READ_PRODUCT_DETAILS_ERROR",
    errorMessage
});

export const deleteProduct = (id: number): ProductDetailsActionTypes => ({
    type: "DELETE_PRODUCT",
    id
});

export const deleteProductSuccess = (): ProductDetailsActionTypes => ({
    type: "DELETE_PRODUCT_SUCCESS"
});

export const deleteProductError = (errorMessage: string): ProductDetailsActionTypes => ({
    type: "DELETE_PRODUCT_ERROR",
    errorMessage
});