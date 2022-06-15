
import {ActionTypes} from '../continers/action-types';
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = () => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};