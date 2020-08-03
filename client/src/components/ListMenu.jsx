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
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Modal.Header closeButton onHide={hideMenu}>
          <h7>List action</h7>
        </Modal.Header>

        <Modal.Body>
          <div className="menu-item">Delete list</div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
