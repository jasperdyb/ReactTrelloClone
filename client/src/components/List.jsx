import React, { useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import { Button } from "react-bootstrap";

export default function List({
  title,
  todos,
  listId,
  addTodo,
  updateEditState,
  editRef,
}) {
  const [showNew, updateShowNew] = useState(false);

  function toggleShowNew(e) {
    updateShowNew(!showNew);
  }

  return (
    <div className="list p-2 m-1 rounded-lg">
      <div className="title">{title}</div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          listId={listId}
          todoId={index}
          updateEditState={updateEditState}
          editRef={editRef}
        />
      ))}
      {showNew && (
        <NewTodo
          listId={listId}
          toggleShowNew={toggleShowNew}
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
