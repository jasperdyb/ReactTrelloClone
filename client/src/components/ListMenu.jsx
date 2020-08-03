import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ListMenu({ menuState, updateMenuState }) {
  const { top, left } = menuState.dimensions;
  const position = {
    position: "relative",
    margin: 0,
    top,
    left,
  };

  function hideMenu() {
    updateMenuState({ ...menuState, show: false });
  }

  return (
    <div className="menu-layer" onClick={hideMenu}>
      <Modal.Dialog
        style={position}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Modal.Header closeButton onHide={hideMenu}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideMenu}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
