import { connect } from "react-redux";
import WallpaperChoice from "../components/WallpaperChoice";
import { updateWallpaperUrl } from "../reducers/wallpaperSlice";

const mapDispatchToProps = { updateWallpaperUrl };

export default connect(null, mapDispatchToProps)(WallpaperChoice);
