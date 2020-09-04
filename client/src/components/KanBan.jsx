import React, { useState } from "react";
import KanBanNav from "./KanBanNav";
import List from "./List";

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

  const [lists, updateLists] = useState(dummyData);
  const [editState, updateEditState] = useState({
    show: false,
    dimensions: { top: 0, left: 0, width: 0 },
    value: "",
  });

  function addTodo(listIndex, newTodo) {
    let newLists = [...lists];
    newLists[listIndex].todos.push({ name: newTodo, finished: false });

    updateLists(newLists);
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
      </div>
    </span>
  );
}
