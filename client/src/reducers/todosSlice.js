import { createSlice } from "@reduxjs/toolkit";

const dummyData = [
  {
    title: "list1",
    todos: [
      {
        name: "todo1",
        finished: false,
      },
      {
        name: "todo2",
        finished: false,
      },
    ],
  },
  {
    title: "list2",
    todos: [
      {
        name: "todo3",
        finished: false,
      },
      {
        name: "todo4",
        finished: false,
      },
      {
        name: "todo5",
        finished: false,
      },
    ],
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: dummyData,
  reducers: {},
});

export default todosSlice.reducer;
