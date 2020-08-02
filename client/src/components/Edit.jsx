import React from "react";
import { Form } from "react-bootstrap";

export default function Edit({ editState }) {
  const styles = {
    position: "relative",
    margin: 0,
    ...editState.dimensions,
  };

  return (
    <Form className="edit-form">
      <Form.Control style={styles} as="textarea" rows="3" />
    </Form>
  );
}
