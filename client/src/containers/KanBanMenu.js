import { connect } from "react-redux";
import KanBanMenu from "../components/KanBanMenu";
import { updateMenuState } from "../reducers/kanBanMenuSlice";

const mapStateToProps = (state) => ({
  kanBanMenuState: state.kanBanMenu,
});

const mapDispatchToProps = { updateMenuState };

export default connect(mapStateToProps, mapDispatchToProps)(KanBanMenu);
