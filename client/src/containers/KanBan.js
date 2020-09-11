import { connect } from "react-redux";
import KanBan from "../components/KanBan";

const mapStateToProps = (state) => ({
  lists: state.todos,
  editState: state.todoEdit,
});

export default connect(mapStateToProps)(KanBan);
