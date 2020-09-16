import { connect } from "react-redux";
import KanBanMenu from "../components/KanBanMenu";
import { updateMenuState } from "../reducers/kanBanMenuSlice";
import { updateWallpaperUrl } from "../reducers/wallpaperSlice";

const mapStateToProps = (state) => ({
  kanBanMenuState: state.kanBanMenu,
});

const mapDispatchToProps = { updateMenuState, updateWallpaperUrl };

export default connect(mapStateToProps, mapDispatchToProps)(KanBanMenu);
