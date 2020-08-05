import React, { useState } from "react";
import KanBanNav from "./KanBanNav";
import List from "./List";
import Edit from "./Edit";
import NewList from "./NewList";
import ListMenu from "./ListMenu";

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

  const menuStateInit = {
    show: false,
    dimensions: { top: 0, left: 0 },
    listId: -1,
  };

  const [lists, updateLists] = useState(dummyData);
  const [editState, updateEditState] = useState(editStateInit);
  const [menuState, updateMenuState] = useState(menuStateInit);

  function addList(listName) {
    if (listName) {
      let newLists = [...lists];
      newLists.push({
        title: listName,
        todos: [],
      });
      updateLists(newLists);
    }
  }

  function editListTitle(listIndex, title) {
    if (title) {
      let newLists = [...lists];
      newLists[listIndex].title = title;

      updateLists(newLists);
    }
  }

  function deleteList() {
    let newLists = [...lists];
    newLists.splice(menuState.listId, 1);
    console.log(newLists);
    updateLists(newLists);
    updateMenuState(menuStateInit);
  }

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
    <>
      <KanBanNav />
      <div className="board  p-1">
        {lists.map((list, index) => (
          <List
            key={index}
            {...list}
            listId={index}
            addTodo={addTodo}
            updateEditState={updateEditState}
            editListTitle={editListTitle}
            updateMenuState={updateMenuState}
          />
        ))}
        <NewList addList={addList} />
        {editState.show && (
          <Edit
            editState={editState}
            updateEditState={updateEditState}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          ></Edit>
        )}
        {menuState.show && (
          <ListMenu
            menuState={menuState}
            updateMenuState={updateMenuState}
            deleteList={deleteList}
          />
        )}
      </div>
    </>
  );
}
