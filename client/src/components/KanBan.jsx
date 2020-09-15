import React from "react";
import KanBanNav from "../containers/KanBanNav";
import List from "../containers/List";
import Edit from "../containers/Edit";
import NewList from "../containers/NewList";
import ListMenu from "../containers/ListMenu";
import CustomDragLayer from "./CustomDragLayer";
import Wallpaper from "./Wallpaper";
import KanBanMenu from "../containers/KanBanMenu";

export default function KanBan({ lists, editState, kanBanMenuState }) {
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
      {kanBanMenuState.render && <KanBanMenu />}
    </>
  );
}
