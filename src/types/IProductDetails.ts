import { IProduct } from "./IProduct";

export interface IProductDetails extends IProduct {
  description: string;
  image: string;
}