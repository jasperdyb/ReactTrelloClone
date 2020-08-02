import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function NewTodo({ toggleShowNew, newTodoRef }) {
  const [autoHeight, updateAutoHeight] = useState(0);

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

  return (
    <Form>
      <Form.Control
        as="textarea"
        style={textareaStyle}
        ref={newTodoRef}
        onBlur={toggleShowNew}
        onInput={autoResize}
      />
    </Form>
  );
}
