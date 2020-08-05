import React from "react";
import { Modal } from "react-bootstrap";

export default function ListMenu({ menuState, updateMenuState, deleteList }) {
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
          <h6>List action</h6>
        </Modal.Header>

        <Modal.Body>
          <div className="menu-item" onClick={deleteList}>
            Delete list
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
