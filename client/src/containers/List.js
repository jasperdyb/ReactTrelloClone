import { connect } from "react-redux";
import List from "../components/List";
import { addTodo, editList } from "../reducers/todosSlice";

const mapDispatchToProps = { addTodo, editList };

export default connect(null, mapDispatchToProps)(List);
