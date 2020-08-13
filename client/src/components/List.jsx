import React, { useState, useRef } from "react";
import Todo from "../containers/Todo";
import NewTodo from "./NewTodo";
import ListTitle from "./ListTitle";
import { Button } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/constants.js";

export default function List({
  id,
  title,
  todos,
  listId,
  addTodo,
  editList,
  updateMenuState,
  moveTodo,
  moveList,
}) {
  const [showNew, updateShowNew] = useState(false);
  const listRef = useRef(null);
  const [dragRect, setDragRect] = useState({
    width: 0,
    height: 0,
    backgroundColor: "#c5c1c1",
  });

  function toggleShowNew(e) {
    updateShowNew(!showNew);
  }

  const [{ isDragging }, drag] = useDrag({
    item: {
      id,
      orgListId: listId,
      type: ItemTypes.List,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    isDragging: (monitor) => {
      return id === monitor.getItem().id;
    },
    begin: () => {
      const { width, height } = listRef.current?.getBoundingClientRect();
      setDragRect({ ...dragRect, width, height });
    },
  });

  const [isOverCurrent, todoDrop] = useDrop({
    accept: [ItemTypes.TODO, ItemTypes.List],
    collect: (monitor) => ({
      isOverCurrent: monitor.isOver({ shallow: true }), //shallow為true時，若與子drop元件同時觸發hover，此項為false
    }),
    hover: (item, monitor) => {
      const { orgListId } = item;
      const endListId = listId;

      switch (item.type) {
        case "todo":
          const { orgTodoId } = item;
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
          if (orgListId !== endListId) {
            moveList({
              orgListId,
              endListId,
            });

            item.orgListId = endListId;
          }
          break;
        default:
          return;
      }
    },
  });

  drag(listRef);

  if (isDragging) {
    return <div className="list p-2 m-1 rounded-lg" style={dragRect}></div>;
  } else {
    return (
      <div className="list-wrapper" ref={todoDrop}>
        <div
          className={`list p-2 m-1 rounded-lg ${isDragging ? "dragged" : ""}`}
          ref={listRef}
        >
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
}
