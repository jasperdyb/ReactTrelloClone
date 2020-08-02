import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewList() {
  const [editing, updateEditing] = useState(false);
  const editRef = useRef(null);

  function toggleEditing() {
    updateEditing(!editing);
  }

  useEffect(() => {
    if (editing && editRef.current) {
      editRef.current.focus();
    }
  }, [editing]);

  if (!editing) {
    return (
      <Button
        className="list p-2 m-1  rounded-lg new-list"
        onClick={toggleEditing}
      >
        Add a new list...
      </Button>
    );
  } else {
    return (
      <div className="list p-2 m-1  rounded-lg">
        <Form>
          <Form.Control
            as="textarea"
            rows="1"
            placeholder="Name the new list.."
            ref={editRef}
            onBlur={toggleEditing}
          />
        </Form>
      </div>
    );
  }
}
