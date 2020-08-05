import { connect } from "react-redux";
import NewList from "../components/NewList";
import { addList } from "../reducers/todosSlice";

const mapDispatchToProps = { addList };

export default connect(null, mapDispatchToProps)(NewList);
