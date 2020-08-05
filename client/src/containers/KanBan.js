import { connect } from "react-redux";
import KanBan from "../components/KanBan";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(KanBan);
