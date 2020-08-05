import { connect } from "react-redux";
import Edit from "../components/Edit";
import { editTodo, deleteTodo } from "../reducers/todosSlice";
import { updateEditState } from "../reducers/todoEditSlice";

const mapStateToProps = (state) => ({
  editState: state.todoEdit,
});

const mapDispatchToProps = { editTodo, deleteTodo, updateEditState };

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
