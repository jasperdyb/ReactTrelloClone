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
  reducers: {
    addTodo(state, action) {
      const { listId, name } = action.payload;
      state[listId].todos.push({ name: name, finished: false });
    },
    editTodo(state, action) {
      const { value, listId, todoId } = action.payload;
      state[listId].todos[todoId].name = value;
    },
    deleteTodo(state, action) {
      const { listId, todoId } = action.payload;
      state[listId].todos.splice(todoId, 1);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
