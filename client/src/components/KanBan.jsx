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

  return (
    <span>
      <KanBanNav />
      <div fluid className="board p-1">
        {lists.map((list) => (
          <List key={list.title} {...list} />
        ))}
      </div>
    </span>
  );
}
