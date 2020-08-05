import React from "react";
import KanBanNav from "./KanBanNav";
import List from "../containers/List";
import Edit from "../containers/Edit";
import NewList from "../containers/NewList";
import ListMenu from "../containers/ListMenu";

export default function KanBan({ lists }) {
  return (
    <>
      <KanBanNav />
      <div className="board  p-1">
        {lists.map((list, index) => (
          <List key={index} {...list} listId={index} />
        ))}
        <NewList />
        <Edit />
        <ListMenu />
      </div>
    </>
  );
}
