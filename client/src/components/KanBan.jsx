import React from "react";
import { Container, Row } from "react-bootstrap";
import KanBanNav from "./KanBanNav";
import List from "./List";

export default function KanBan() {
  return (
    <span>
      <KanBanNav></KanBanNav>
      <Container fluid className="board p-1">
        <Row className="m-0">
          <List></List>
          <List></List>
        </Row>
      </Container>
    </span>
  );
}
