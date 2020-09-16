import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/constants.js";
import { getEmptyImage } from "react-dnd-html5-backend";

export default function Todo({
  id,
  name,
  listId,
  todoId,
  updateEditState,
  moveTodo,
}) {
  const [isOver, setIsOver] = useState(false);
  const targetRef = useRef(null);

  function handleOnOver() {
    if (!isDragging) {
      setIsOver(true);
    }
  }

  function handleOnLeave() {
    setIsOver(false);
  }

  function handelClickEdit(e) {
    e.preventDefault();

    const { top, left, width } = targetRef.current.getBoundingClientRect();
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

  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      id,
      name,
      orgListId: listId,
      orgTodoId: todoId,
      type: ItemTypes.TODO,
      width: targetRef.current
        ? targetRef.current.getBoundingClientRect().width
        : null,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    isDragging: (monitor) => {
      return id === monitor.getItem().id;
    },
    begin: (monitor) => {
      setIsOver(false);
    },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TODO,
    hover: (item, monitor) => {
      const { orgListId, orgTodoId } = item;
      const endListId = listId;
      const endTodoId = todoId;
      //Same list , up n down
      if (orgListId === endListId) {
        if (orgTodoId === endTodoId) {
          return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = targetRef.current?.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (orgTodoId < endTodoId && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (orgTodoId > endTodoId && hoverClientY > hoverMiddleY) {
          return;
        }

        moveTodo({
          orgListId,
          orgTodoId,
          endListId,
          endTodoId,
        });

        item.orgTodoId = endTodoId;
      }
    },
  });

  drag(drop(targetRef));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div
      className={`todo text-wrap my-1 p-2 rounded ${
        isDragging ? "dragged" : ""
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
  );
}
