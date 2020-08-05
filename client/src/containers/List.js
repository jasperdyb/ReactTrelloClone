import { connect } from "react-redux";
import List from "../components/List";
import { addTodo, editList } from "../reducers/todosSlice";
import { updateMenuState } from "../reducers/listMenuSlice";

const mapDispatchToProps = { addTodo, editList, updateMenuState };

export default connect(null, mapDispatchToProps)(List);
