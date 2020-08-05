import { connect } from "react-redux";
import List from "../components/List";
import { addTodo } from "../reducers/todosSlice";

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = { addTodo };
console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(List);
