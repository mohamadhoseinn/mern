import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ProductListReucer from "./redux/productList/ProductList-reucer";

const reducer = combineReducers({ productList: ProductListReucer });
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
