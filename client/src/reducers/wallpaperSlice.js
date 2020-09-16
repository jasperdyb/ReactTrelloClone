import { createSlice } from "@reduxjs/toolkit";

const initUrl = "";

const wallpaperSlice = createSlice({
  name: "wallpaperSlice",
  initialState: initUrl,
  reducers: {
    updateWallpaperUrl(state, action) {
      return action.payload;
    },
  },
});

export const { updateWallpaperUrl } = wallpaperSlice.actions;

export default wallpaperSlice.reducer;
