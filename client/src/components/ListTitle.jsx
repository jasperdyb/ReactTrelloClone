import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    <Form className="title d-flex ">
      <Form.Control
        className={`p-1 ${editing ? "editing" : ""} flex-grow-1 title-text`}
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
      <Button className="menu-button" size="sm">
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </Form>
  );
}
