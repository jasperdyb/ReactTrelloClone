import { connect } from "react-redux";
import KanBan from "../components/KanBan";

const mapStateToProps = (state) => ({
  lists: state.todos,
});

export default connect(mapStateToProps)(KanBan);
