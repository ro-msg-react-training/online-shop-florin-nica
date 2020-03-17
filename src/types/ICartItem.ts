import { IProductDetails } from "./IProductDetails";

export interface ICartItem  {
    product: IProductDetails;
    quantity: number;
}