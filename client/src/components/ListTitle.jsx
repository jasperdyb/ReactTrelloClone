import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function ListTitle({ title, editListTitle, listId }) {
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

  function handleEditTitle(e) {
    if (e.target.value.trim()) {
      editListTitle(listId, e.target.value.trim());
    } else {
      e.target.value = title;
    }
    triggerEditList();
    titleRef.current.blur();
  }

  return (
    <Form>
      <Form.Control
        className={`title p-1 ${editing ? "editing" : ""}`}
        style={textareaStyle}
        as="textarea"
        defaultValue={title}
        onClick={editing ? null : handleOnClick}
        onBlur={handleEditTitle}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEditTitle(e);
          }
        }}
        onInput={autoResize}
        ref={titleRef}
        readOnly={!editing}
      />
    </Form>
  );
}
