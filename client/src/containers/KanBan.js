import { connect } from "react-redux";
import KanBan from "../components/KanBan";

const mapStateToProps = (state) => ({
  lists: state.todos,
  editState: state.todoEdit,
  kanBanMenuState: state.kanBanMenu,
});

export default connect(mapStateToProps)(KanBan);
