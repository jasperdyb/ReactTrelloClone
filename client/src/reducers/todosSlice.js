import { createSlice } from "@reduxjs/toolkit";

const dummyData = [
  {
    title: "list1",
    todos: [
      { id: 1, name: "todo1", finished: false },
      { id: 2, name: "todo2", finished: false },
    ],
  },
  {
    title: "list2",
    todos: [
      { id: 3, name: "todo3", finished: false },
      { id: 4, name: "todo4", finished: false },
      { id: 5, name: "todo5", finished: false },
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
    addList(state, action) {
      const { listName } = action.payload;
      state.push({
        title: listName,
        todos: [],
      });
    },
    editList(state, action) {
      const { listId, title } = action.payload;
      state[listId].title = title;
    },
    deleteList(state, action) {
      const { listId } = action.payload;
      state.splice(listId, 1);
    },
    moveTodo(state, action) {
      const { orgListId, orgTodoId, endListId, endTodoId } = action.payload;
      const todo = state[orgListId].todos.splice(orgTodoId, 1);
      state[endListId].todos.splice(endTodoId, 0, todo[0]);
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  addList,
  editList,
  deleteList,
  moveTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
