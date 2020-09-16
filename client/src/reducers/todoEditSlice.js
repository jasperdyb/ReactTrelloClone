import { createSlice } from "@reduxjs/toolkit";

const editStateInit = {
  show: false,
  dimensions: { top: 0, left: 0, width: 0 },
  value: "",
  listId: -1,
  todoId: -1,
};

const todoEditSlice = createSlice({
  name: "todoEditSlice",
  initialState: editStateInit,
  reducers: {
    updateEditState(state, action) {
      return action.payload;
    },
  },
});

export const { updateEditState } = todoEditSlice.actions;

export default todoEditSlice.reducer;
