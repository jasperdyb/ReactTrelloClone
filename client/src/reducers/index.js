import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import todoEditReducer from "./todoEditSlice";
import listMenuReducer from "./listMenuSlice";
import kanBanMenuReducer from "./kanBanMenuSlice";
import wallpaperSlice from "./wallpaperSlice";

export default combineReducers({
  todos: todosReducer,
  todoEdit: todoEditReducer,
  listMenu: listMenuReducer,
  kanBanMenu: kanBanMenuReducer,
  wallpaper: wallpaperSlice,
});
