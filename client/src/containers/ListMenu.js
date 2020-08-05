import { connect } from "react-redux";
import ListMenu from "../components/ListMenu";
import { deleteList } from "../reducers/todosSlice";
import { updateMenuState } from "../reducers/listMenuSlice";

const mapStateToProps = (state) => ({
  menuState: state.listMenu,
});

const mapDispatchToProps = { deleteList, updateMenuState };

export default connect(mapStateToProps, mapDispatchToProps)(ListMenu);
