import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import todoEditReducer from "./todoEditSlice";

export default combineReducers({
  todos: todosReducer,
  todoEdit: todoEditReducer,
});
