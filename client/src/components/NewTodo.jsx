import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

export default function Todo({ toggleShowNew, newTodoRef }) {
  useEffect(() => {
    newTodoRef.current.focus();
  }, [newTodoRef]);

  return (
    <Form>
      <Form.Control as="textarea" ref={newTodoRef} onBlur={toggleShowNew} />
    </Form>
  );
}
