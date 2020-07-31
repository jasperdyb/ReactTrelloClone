import React from "react";
import { Container, Button } from "react-bootstrap";
import KanBanNav from "./KanBanNav";

export default function KanBan() {
  return (
    <span>
      <KanBanNav></KanBanNav>
      <Container fluid>
        <Button>Test</Button>
      </Container>
    </span>
  );
}
