import { type } from "@testing-library/user-event/dist/type";

const intialState={
    procucts:[{

        id:1,
        title:"Dispesh",
        category:"programmer"
    }]
}

export const productReducer = (state = intialState, action) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};