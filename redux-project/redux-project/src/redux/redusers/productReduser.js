import { type } from "@testing-library/user-event/dist/type";

import { ActionTypes } from "../continers/action-types";
const intialState={
    procucts:[
      
  ],
}

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,procucts:payload};

    default:
      return state;
  }
};



export const selectorProductReduser=(state={},{type,payload})=>{

  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      
      break;
  
    default:
      break;
  }
}