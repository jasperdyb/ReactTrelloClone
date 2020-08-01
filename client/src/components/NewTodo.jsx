import React from "react";
import { Form } from "react-bootstrap";

export default function Todo({ name }) {
  return (
    <Form>
      <Form.Control as="textarea" />
    </Form>
  );
}
