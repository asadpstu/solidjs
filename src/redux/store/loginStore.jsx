import { createStore } from 'redux';
const initialState = {
    fullName : "",
    userName : "",
    country : "",
    contact : "",
    gender : "",
    designation : ""
  }

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
          ...state,
          ...action.payload
      }
      case "CLEAR":
        return {
          initialState
        }  
    default:
      return state;
  }
};

export default createStore(todos);
