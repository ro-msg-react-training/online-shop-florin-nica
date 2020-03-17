import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers/product';
import { productDetailsReducer } from './reducers/productDetails';
import { productFormReducer } from './reducers/productForm';
import { shoppingCartReducer } from './reducers/shoppingCart';

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  shoppingCart: shoppingCartReducer,
  productForm: productFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
