import React, { useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function Edit({ editState, updateEditState, editTodo }) {
  const editRef = useRef(null);
  const styles = {
    position: "relative",
    margin: 0,
    ...editState.dimensions,
  };

  useEffect(() => {
    editRef.current.focus();
  }, [editRef]);

  function toggleEditShow() {
    updateEditState({
      ...editState,
      show: false,
    });
  }

  function updateValue(e) {
    updateEditState({
      ...editState,
      value: e.target.value,
    });
  }

  return (
    <Form className="edit-form" onClick={toggleEditShow}>
      <div style={styles}>
        <Form.Control
          ref={editRef}
          as="textarea"
          rows="3"
          value={editState.value}
          // onBlur={toggleEditShow}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={updateValue}
        />
        <Button
          className="m-2"
          onClick={(e) => {
            e.stopPropagation();
            editTodo();
          }}
        >
          Save
        </Button>
      </div>
    </Form>
  );
}
