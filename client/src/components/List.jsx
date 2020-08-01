import React from "react";
import Todo from "./Todo";
import { Button } from "react-bootstrap";

export default function List({ title, todos }) {
  return (
    <div className="list p-2 m-1 rounded-lg">
      <div className="title">{title}</div>
      {todos.map((todo) => (
        <Todo key={todo.name} {...todo} />
      ))}
      <div className="footer pt-2 d-flex">
        <Button className="py-1 flex-grow-1 text-left">+ New</Button>
      </div>
    </div>
  );
}
