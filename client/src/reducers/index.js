import { combineReducers } from "redux";
import todosReducer from "./todosSlice";

export default combineReducers({
  todos: todosReducer,
});
