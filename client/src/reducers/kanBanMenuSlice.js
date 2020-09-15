import { createSlice } from "@reduxjs/toolkit";

const menuStateInit = {
  show: false,
  render: false,
};
const kanBanMenuSlice = createSlice({
  name: "kanBandMenu",
  initialState: menuStateInit,
  reducers: {
    updateMenuState(state, action) {
      return action.payload;
    },
  },
});

export const { updateMenuState } = kanBanMenuSlice.actions;

export default kanBanMenuSlice.reducer;
