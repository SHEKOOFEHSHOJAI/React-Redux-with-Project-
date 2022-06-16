import { combineReducers } from "redux";
import { productReducer,selectorProductReduser } from "./productReduser";

const redusers = combineReducers({
  allproducts: productReducer,
  product: selectorProductReduser,
});

export default redusers;