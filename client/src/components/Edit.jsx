import React from "react";
import { Form } from "react-bootstrap";

export default function Edit() {
  return (
    <Form className="edit-form">
      <Form.Control as="textarea" rows="3" />
    </Form>
  );
}
