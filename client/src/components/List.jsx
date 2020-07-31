import React from "react";
import Todo from "./Todo";

export default function List() {
  return (
    <div className="list p-2 m-1 rounded-lg">
      <div className="title">List1</div>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  );
}
