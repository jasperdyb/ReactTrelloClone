import React, { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function Edit({ editState, updateEditState }) {
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

  return (
    <Form className="edit-form">
      <Form.Control
        style={styles}
        ref={editRef}
        as="textarea"
        rows="3"
        onBlur={toggleEditShow}
      />
    </Form>
  );
}
