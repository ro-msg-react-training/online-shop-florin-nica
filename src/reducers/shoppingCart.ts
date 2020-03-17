import { ShoppingCartActionTypes } from "../types/IActions";
import { ICartItem } from "../types/ICartItem";

interface IShoppingCartState {
  readonly items: ICartItem[];
  readonly isLoading: boolean;
  readonly error: string;
}

const productReducerDefaultState: IShoppingCartState = {
  items: [],
  isLoading: false,
  error: ''
};

function shoppingCartReducer(state = productReducerDefaultState, action: ShoppingCartActionTypes): IShoppingCartState {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      let existingItem = state.items.find(item => item.product.id === action.product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return {
          ...state
        };
      }
      else {
        let addedItem = { product: action.product, quantity: 1 };

        return {
          ...state,
          items: [...state.items, addedItem]
        };
      }
    case "REMOVE_PRODUCT":
      let newItems = state.items.filter(item => action.productId !== item.product.id);

      return {
        ...state,
        items: newItems
      };
    case "CHECKOUT":
      return {
        ...state,
        isLoading: true
      };
    case "CHECKOUT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        items: []
      };
    case "CHECKOUT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.errorMessage
      };
    default:
      return state;
  }
}

export { shoppingCartReducer };

