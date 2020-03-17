import { ProductActionTypes } from "../types/IActions";
import { IProduct } from "../types/IProduct";

export const readProducts = (): ProductActionTypes => ({
    type: "READ_PRODUCTS"
});

export const readProductsSuccess = (products: IProduct[]): ProductActionTypes => ({
    type: "READ_PRODUCTS_SUCCESS",
    products
});

export const readProductsError = (errorMessage: string): ProductActionTypes => ({
    type: "READ_PRODUCTS_ERROR",
    errorMessage
});
