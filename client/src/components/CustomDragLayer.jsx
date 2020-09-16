import React from "react";
import { ItemTypes } from "../dnd/constants.js";
import { useDragLayer } from "react-dnd";
import Todo from "./Todo";
import ListTitle from "./ListTitle";
import { Button } from "react-bootstrap";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
};

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px) rotate(5deg)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export default function CustomDragLayer() {
  const {
    item,
    itemType,
    initialOffset,
    currentOffset,
    isDragging,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function renderItem() {
    switch (itemType) {
      case ItemTypes.TODO: //return pure todo
        return (
          <div style={{ width: item.width }}>
            <div className="todo dragged-todo text-wrap my-1 p-2 rounded ">
              {item.name}
            </div>
          </div>
        );
      case ItemTypes.List: //return pure list
        return (
          <div
            style={{ width: item.width }}
            className="list p-2 m-1 rounded-lg "
          >
            <ListTitle title={item.title} />
            {item.todos.map((todo, index) => (
              <Todo
                key={todo.id}
                {...todo}
                listId={item.listId}
                todoId={index}
              />
            ))}
            <div className="footer d-flex">
              <Button className="py-1 flex-grow-1 text-left">+ New</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles} className="drag-layer">
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
}
