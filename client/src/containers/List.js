import { connect } from "react-redux";
import List from "../components/List";
import { addTodo, editList, moveTodo } from "../reducers/todosSlice";
import { updateMenuState } from "../reducers/listMenuSlice";

const mapDispatchToProps = { addTodo, editList, updateMenuState, moveTodo };

export default connect(null, mapDispatchToProps)(List);
