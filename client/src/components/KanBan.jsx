import React, { useState } from "react";
import KanBanNav from "./KanBanNav";
import List from "../containers/List";
import Edit from "../containers/Edit";
import NewList from "./NewList";
import ListMenu from "./ListMenu";

export default function KanBan({ todos }) {
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

  const menuStateInit = {
    show: false,
    dimensions: { top: 0, left: 0 },
    listId: -1,
  };

  const [lists, updateLists] = useState(dummyData);
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

  return (
    <>
      <KanBanNav />
      <div className="board  p-1">
        {todos.map((list, index) => (
          <List
            key={index}
            {...list}
            listId={index}
            editListTitle={editListTitle}
            updateMenuState={updateMenuState}
          />
        ))}
        <NewList addList={addList} />
        <Edit></Edit>
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
