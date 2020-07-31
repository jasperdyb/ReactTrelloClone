import React from "react";
import Todo from "./Todo";

export default function List({ title, todos }) {
  return (
    <div className="list p-2 m-1 rounded-lg">
      <div className="title">{title}</div>
      {todos.map((todo) => (
        <Todo key={todo.name} {...todo} />
      ))}
    </div>
  );
}
