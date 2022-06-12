
import {ActionTypes} from '../continers/action-types';
export const setProducts=()=>{
    return {
      type:ActionTypes.SET_PRODUCTS,
      payload:products
    };
}

export const selectedProduct = () => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};