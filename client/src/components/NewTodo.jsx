import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

export default function NewTodo({ listId, toggleShowNew, addTodo }) {
  const [autoHeight, updateAutoHeight] = useState(0);
  const newTodoRef = useRef(null);

  const textareaStyle = {
    height: `${autoHeight}px`,
  };

  useEffect(() => {
    updateAutoHeight(75);
    newTodoRef.current.focus();
  }, [newTodoRef]);

  function autoResize(e) {
    updateAutoHeight(newTodoRef.current.scrollHeight);
  }

  function handleAddTodo(e) {
    addTodo(listId, e.target.value);
    e.target.value = "";
    toggleShowNew();
  }

  return (
    <Form>
      <Form.Control
        as="textarea"
        style={textareaStyle}
        ref={newTodoRef}
        onBlur={handleAddTodo}
        onInput={autoResize}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e);
          }
        }}
      />
    </Form>
  );
}
