import React, { useState } from "react";
import KanBanNav from "./KanBanNav";
import List from "./List";
import Edit from "./Edit";
import NewList from "./NewList";

export default function KanBan() {
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

  const editStateInit = {
    show: false,
    dimensions: { top: 0, left: 0, width: 0 },
    value: "",
    listId: -1,
    todoId: -1,
  };

  const [lists, updateLists] = useState(dummyData);
  const [editState, updateEditState] = useState(editStateInit);

  function addTodo(listIndex, newTodo) {
    if (newTodo) {
      let newLists = [...lists];
      newLists[listIndex].todos.push({ name: newTodo, finished: false });

      updateLists(newLists);
    }
  }

  function editTodo() {
    const { value, listId, todoId } = editState;

    const currentTodo = lists[listId].todos[todoId];
    let newLists = [...lists];
    newLists[listId].todos[todoId] = {
      ...currentTodo,
      name: value,
    };

    updateLists(newLists);
    updateEditState(editStateInit);
  }

  function deleteTodo() {
    const { listId, todoId } = editState;

    let newLists = [...lists];

    newLists[listId].todos.splice(todoId, 1);

    updateLists(newLists);
    updateEditState(editStateInit);
  }

  return (
    <span>
      <KanBanNav />
      <div className="board p-1">
        {lists.map((list, index) => (
          <List
            key={index}
            {...list}
            listId={index}
            addTodo={addTodo}
            updateEditState={updateEditState}
          />
        ))}
        <NewList />
        {editState.show && (
          <Edit
            editState={editState}
            updateEditState={updateEditState}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          ></Edit>
        )}
      </div>
    </span>
  );
}
