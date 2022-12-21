import { createStore } from 'redux';
const initialState = {
    products : []
  }

const productStore = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products : [...state.products, action.payload]
      }
    default:
      return state;
  }
};

export default createStore(productStore);