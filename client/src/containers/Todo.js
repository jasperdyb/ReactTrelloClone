import { connect } from "react-redux";
import Todo from "../components/Todo";
import { moveTodo } from "../reducers/todosSlice";
import { updateEditState } from "../reducers/todoEditSlice";

const mapDispatchToProps = { updateEditState, moveTodo };

export default connect(null, mapDispatchToProps)(Todo);
