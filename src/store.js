import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import InputReducer from "./redux/Input/InputReducer";

const reducer = combineReducers({
  inputReducer: InputReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
