import { ShoppingCartActionTypes } from "../types/IActions";
import { ICartItem } from "../types/ICartItem";
import { IProductDetails } from "../types/IProductDetails";

export const addProductToCart = (product: IProductDetails): ShoppingCartActionTypes => ({
    type: "ADD_PRODUCT_TO_CART",
    product
});

export const removeProduct = (productId: number): ShoppingCartActionTypes => ({
    type: "REMOVE_PRODUCT",
    productId
});

export const checkout = (products: ICartItem[]): ShoppingCartActionTypes => ({
    type: "CHECKOUT",
    products
});

export const checkoutSuccess = (): ShoppingCartActionTypes => ({
    type: "CHECKOUT_SUCCESS"
});

export const checkoutError = (errorMessage: string): ShoppingCartActionTypes => ({
    type: "CHECKOUT_ERROR",
    errorMessage
});
