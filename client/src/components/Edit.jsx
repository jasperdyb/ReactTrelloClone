import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function Edit({
  editState,
  updateEditState,
  editTodo,
  deleteTodo,
}) {
  const [autoHeight, updateAutoHeight] = useState(0);
  const editRef = useRef(null);

  const { top, left, width } = editState.dimensions;
  const position = {
    position: "relative",
    margin: 0,
    top,
    left,
  };

  const textareaSize = {
    width,
    height: `${autoHeight}px`,
  };

  function autoResize(e) {
    const baseHeight = 84;
    const scrollHeight = editRef.current.scrollHeight;

    const targetHeight = scrollHeight > baseHeight ? scrollHeight : baseHeight;
    updateAutoHeight(targetHeight);
  }

  useEffect(() => {
    editRef.current.focus();
    autoResize();
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
      <div style={position}>
        <div className="edit-textarea">
          <Form.Control
            style={textareaSize}
            ref={editRef}
            as="textarea"
            rows="3"
            value={editState.value}
            // onBlur={toggleEditShow}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={updateValue}
            onInput={autoResize}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo();
              }
            }}
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
        <div className="edit-side-menu">
          <Button
            className="m-2"
            variant="dark"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Form>
  );
}
