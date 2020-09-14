import React from "react";
import { Navbar } from "react-bootstrap";

export default function KanBanNav() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">React Trello Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}
