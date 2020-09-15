import { connect } from "react-redux";
import KanBanMenu from "../components/KanBanMenu";
import { updateMenuState } from "../reducers/kanBanMenuSlice";

const mapDispatchToProps = { updateMenuState };

export default connect(null, mapDispatchToProps)(KanBanMenu);
