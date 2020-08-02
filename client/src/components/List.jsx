import React, { useState, useRef } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import { Button } from "react-bootstrap";

export default function List({ title, todos, listId, addTodo }) {
  const [showNew, updateShowNew] = useState(false);
  const newTodoRef = useRef(null);

  function toggleShowNew(e) {
    updateShowNew(!showNew);
  }

  return (
    <div className="list p-2 m-1 rounded-lg">
      <div className="title">{title}</div>
      {todos.map((todo) => (
        <Todo key={todo.name} {...todo} />
      ))}
      {showNew && (
        <NewTodo
          listId={listId}
          toggleShowNew={toggleShowNew}
          newTodoRef={newTodoRef}
          addTodo={addTodo}
        />
      )}
      {!showNew && (
        <div className="footer d-flex">
          <Button
            className="py-1 flex-grow-1 text-left"
            onClick={toggleShowNew}
          >
            + New
          </Button>
        </div>
      )}
    </div>
  );
}
