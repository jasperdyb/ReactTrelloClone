import { connect } from "react-redux";
import Todo from "../components/Todo";
import { updateEditState } from "../reducers/todoEditSlice";

const mapDispatchToProps = { updateEditState };

export default connect(null, mapDispatchToProps)(Todo);
