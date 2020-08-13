import React, { useState } from "react";
import Todo from "../containers/Todo";
import NewTodo from "./NewTodo";
import ListTitle from "./ListTitle";
import { Button } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";
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

  const [, drag] = useDrag({
    item: {
      orgListId: listId,
      type: ItemTypes.List,
    },
  });

  const [isOverCurrent, todoDrop] = useDrop({
    accept: [ItemTypes.TODO, ItemTypes.List],
    collect: (monitor) => ({
      isOverCurrent: monitor.isOver({ shallow: true }), //shallow為true時，若與子drop元件同時觸發hover，此項為false
    }),
    hover: (item, monitor) => {
      switch (item.type) {
        case "todo":
          const { orgListId, orgTodoId } = item;
          const endListId = listId;
          const endTodoId = todos.length;

          if (orgListId !== endListId) {
            if (isOverCurrent) {
              moveTodo({
                orgListId,
                orgTodoId,
                endListId,
                endTodoId,
              });

              item.orgListId = endListId;
              item.orgTodoId = endTodoId;
            }
          }
          break;
        case "list":
          console.log("list");
          break;
        default:
          return;
      }
    },
  });

  return (
    <div className="list-wrapper" ref={todoDrop}>
      <div className="list p-2 m-1 rounded-lg" ref={drag}>
        <ListTitle
          title={title}
          editList={editList}
          listId={listId}
          updateMenuState={updateMenuState}
        />
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
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
