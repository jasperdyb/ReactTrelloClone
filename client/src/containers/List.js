import { connect } from "react-redux";
import List from "../components/List";
import { addTodo } from "../reducers/todosSlice";

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(List);
