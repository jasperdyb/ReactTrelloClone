import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewList() {
  const [editing, updateEditing] = useState(false);
  const [blockOnBlur, updateBlock] = useState(false);
  const editRef = useRef(null);

  function toggleEditing() {
    if (!blockOnBlur) updateEditing(!editing);
  }

  function handleMouseDown() {
    updateBlock(true);
  }

  function handleMouseUp() {
    updateBlock(false);
    editRef.current.focus();
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
        <Button
          className="mt-2"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          Save
        </Button>
      </div>
    );
  }
}
