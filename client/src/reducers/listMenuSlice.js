import { createSlice } from "@reduxjs/toolkit";

const menuStateInit = {
  show: false,
  dimensions: { top: 0, left: 0 },
  listId: -1,
};
const listMenuSlice = createSlice({
  name: "listMenuSlice",
  initialState: menuStateInit,
  reducers: {
    updateMenuState(state, action) {
      return action.payload;
    },
  },
});

export const { updateMenuState } = listMenuSlice.actions;

export default listMenuSlice.reducer;
