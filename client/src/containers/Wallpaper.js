import { connect } from "react-redux";
import Wallpaper from "../components/Wallpaper";
import { updateWallpaperUrl } from "../reducers/wallpaperSlice";

const mapStateToProps = (state) => ({
  wallpaperUrl: state.wallpaper,
});

const mapDispatchToProps = { updateWallpaperUrl };

export default connect(mapStateToProps, mapDispatchToProps)(Wallpaper);
