import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewList({ addList }) {
  const [listName, updateListName] = useState("");
  const [editing, updateEditing] = useState(false);
  const [blockOnBlur, updateBlock] = useState(false);
  const editRef = useRef(null);

  function showEdit() {
    updateEditing(true);
  }

  function hideEdit() {
    if (!blockOnBlur) updateEditing(false);
  }

  function handleMouseDown() {
    updateBlock(true);
  }

  function handleClick() {
    if (listName) {
      addList(listName);
      updateListName("");
      updateBlock(false);
      console.log(blockOnBlur);
      hideEdit();
    }
  }

  function handleMouseUp() {
    updateBlock(false);
    if (editRef.current) {
      editRef.current.focus();
    }
  }

  function updateValue(e) {
    updateListName(e.target.value);
  }

  useEffect(() => {
    if (editing && editRef.current) {
      editRef.current.focus();
    }
  }, [editing]);

  if (!editing) {
    return (
      <Button className="list p-2 m-1  rounded-lg new-list" onClick={showEdit}>
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
            value={listName}
            placeholder="Name the new list.."
            ref={editRef}
            onBlur={hideEdit}
            onChange={updateValue}
          />
          <Button
            type="submit"
            className="mt-2"
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            onMouseUp={handleMouseUp}
          >
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
