import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ListTitle({
  title,
  editList,
  listId,
  updateMenuState,
}) {
  const [editing, updateEditing] = useState(false);
  const [autoHeight, updateAutoHeight] = useState(0);
  const titleRef = useRef(null);
  const menuButtonRef = useRef(null);

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
      editList({ listId, title: e.target.value.trim() });
    } else {
      e.target.value = title;
    }
    triggerEditList();
    titleRef.current.blur();
  }

  function showMenu(e) {
    e.preventDefault();

    const { bottom, left } = menuButtonRef.current.getBoundingClientRect();
    updateMenuState({
      show: true,
      dimensions: { top: bottom + 2, left: left },
      listId: listId,
    });
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
      <Button
        className="menu-button"
        size="sm"
        ref={menuButtonRef}
        onClick={showMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </Form>
  );
}
