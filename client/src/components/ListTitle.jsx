import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function ListTitle({ title }) {
  const [editing, updateEditing] = useState(false);
  const [autoHeight, updateAutoHeight] = useState(0);
  const titleRef = useRef(null);

  const textareaStyle = {
    height: `${autoHeight}px`,
  };

  useEffect(() => {
    autoResize();
  }, [titleRef]);

  function triggerEditList() {
    updateEditing(!editing);
  }

  function autoResize(e) {
    updateAutoHeight(titleRef.current.scrollHeight);
  }

  function handleOnClick() {
    triggerEditList();
    titleRef.current.select();
  }

  function handleOnBlur() {
    triggerEditList();
  }

  return (
    <div>
      {
        <Form.Control
          className={`title p-1 ${editing ? "editing" : ""}`}
          style={textareaStyle}
          as="textarea"
          value={title}
          onClick={editing ? null : handleOnClick}
          onBlur={handleOnBlur}
          ref={titleRef}
          readOnly={!editing}
        />
      }
    </div>
  );
}
