import React from "react";
import KanBanNav from "./KanBanNav";
import List from "../containers/List";
import Edit from "../containers/Edit";
import NewList from "../containers/NewList";
import ListMenu from "../containers/ListMenu";
import CustomDragLayer from "./CustomDragLayer";
import Wallpaper from "./Wallpaper";

export default function KanBan({ lists, editState }) {
  return (
    <>
      <Wallpaper />
      <KanBanNav />
      <CustomDragLayer />
      <div className="board  p-1">
        {lists.map((list, index) => (
          <List key={list.id} {...list} listId={index} />
        ))}
        <NewList />
        {editState.show && <Edit />}
        <ListMenu />
      </div>
    </>
  );
}
