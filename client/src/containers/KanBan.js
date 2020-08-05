import { connect } from "react-redux";
import KanBan from "../components/KanBan";
import { editTodo, deleteTodo } from "../reducers/todosSlice";
import { updateEditState } from "../reducers/todoEditSlice";

const mapStateToProps = (state) => ({
  todos: state.todos,
  editState: state.todoEdit,
});

const mapDispatchToProps = { editTodo, deleteTodo, updateEditState };

export default connect(mapStateToProps, mapDispatchToProps)(KanBan);
