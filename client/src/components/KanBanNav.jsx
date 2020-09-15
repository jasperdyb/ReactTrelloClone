import React from "react";
import { Navbar, Button } from "react-bootstrap";

export default function KanBanNav({ updateMenuState }) {
  function handleClick(e) {
    e.preventDefault();
    updateMenuState({ show: true });
  }

  return (
    <Navbar expand="lg" className="justify-content-between">
      <Navbar.Brand href="#home">React Trello Clone</Navbar.Brand>
      <Button
        className="board-menu-button"
        variant="outline-success"
        onClick={handleClick}
      >
        Menu
      </Button>
    </Navbar>
  );
}
