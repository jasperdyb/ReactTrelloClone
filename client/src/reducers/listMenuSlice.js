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
    updateListMenuState(state, action) {
      return action.payload;
    },
  },
});

export const { updateListMenuState } = listMenuSlice.actions;

export default listMenuSlice.reducer;
