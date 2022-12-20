import { createStore } from 'redux';
const initialState = {
  data : []
}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        data: [
          ...state.data,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    default:
      return state;
  }
};

export default createStore(todos);
