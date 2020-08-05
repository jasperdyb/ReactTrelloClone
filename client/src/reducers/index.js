import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import todoEditReducer from "./todoEditSlice";
import listMenuReducer from "./listMenuSlice";

export default combineReducers({
  todos: todosReducer,
  todoEdit: todoEditReducer,
  listMenu: listMenuReducer,
});
