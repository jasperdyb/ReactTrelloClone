import React, { useState } from "react";
import Todo from "../containers/Todo";
import NewTodo from "./NewTodo";
import ListTitle from "./ListTitle";
import { Button } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/constants.js";

export default function List({
  title,
  todos,
  listId,
  addTodo,
  editList,
  updateMenuState,
  moveTodo,
}) {
  const [showNew, updateShowNew] = useState(false);

  function toggleShowNew(e) {
    updateShowNew(!showNew);
  }

  const [, drop] = useDrop({
    accept: ItemTypes.TODO,

    hover: (item, monitor) => {},

    drop: (item, monitor) => {
      const didDrop = monitor.didDrop(); //用didDrop確認是否已有其他drop target處理drop事件
      if (didDrop) return;
      const { orgListId, orgTodoId } = item;
      moveTodo({
        orgListId,
        orgTodoId,
        endListId: listId,
        endTodoId: todos.length,
      });
    },
  });

  return (
    <div className="list-wrapper" ref={drop}>
      <div className="list p-2 m-1 rounded-lg">
        <ListTitle
          title={title}
          editList={editList}
          listId={listId}
          updateMenuState={updateMenuState}
        />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            listId={listId}
            todoId={index}
            // updateEditState={updateEditState}
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
    </div>
  );
}
