export default {
  addTodo: loginResponse => ({ type: "LOGIN", payload : loginResponse }),
  clearData: emptyPayload => ({ type: "CLEAR", payload : emptyPayload })
};
