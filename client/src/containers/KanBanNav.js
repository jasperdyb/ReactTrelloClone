import { connect } from "react-redux";
import KanBanNav from "../components/KanBanNav";
import { updateMenuState } from "../reducers/kanBanMenuSlice";

const mapDispatchToProps = { updateMenuState };

export default connect(null, mapDispatchToProps)(KanBanNav);
