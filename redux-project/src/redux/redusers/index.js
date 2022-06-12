import {combineReducers  } from "redux";
import { productReducer } from "./productReduser";

const redusers = combineReducers({
  allproducts: productReducer,
});

// export default redusers;