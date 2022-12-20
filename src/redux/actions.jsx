let nextTodoId = 0;
export default {
  addTodo: text => ({ type: "ADD_TODO", id: ++nextTodoId, text })
};
