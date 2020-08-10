import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/constants.js";

export default function Todo({
  name,
  listId,
  todoId,
  updateEditState,
  moveTodo,
}) {
  const [isOver, setIsOver] = useState(false);
  const targetRef = useRef(null);

  function handleOnOver() {
    setIsOver(true);
  }

  function handleOnLeave() {
    setIsOver(false);
  }

  function handelClickEdit(e) {
    e.preventDefault();

    const { top, left, width } = drag.current.getBoundingClientRect();
    updateEditState({
      show: true,
      dimensions: {
        top: top,
        left: left,
        width: width,
      },
      value: name,
      listId: listId,
      todoId: todoId,
    });
  }

  const [{ isDragging }, drag] = useDrag({
    item: {
      orgListId: listId,
      orgTodoId: todoId,
      type: ItemTypes.TODO,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TODO,

    drop: (item) => {
      const { orgListId, orgTodoId } = item;
      moveTodo({ orgListId, orgTodoId, endListId: listId, endTodoId: todoId });
    },
  });

  return (
    <div ref={drop}>
      <div ref={drag}>
        <div
          className={`todo text-wrap my-1 p-2 rounded ${
            isDragging ? "dragged" : null
          }`}
          ref={targetRef}
          onMouseEnter={handleOnOver}
          onMouseLeave={handleOnLeave}
        >
          {name}
          {isOver
            ? !isDragging && (
                <Button
                  className="edit-button m-1"
                  size="sm"
                  onClick={handelClickEdit}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
              )
            : null}
        </div>
      </div>
    </div>
  );
}
