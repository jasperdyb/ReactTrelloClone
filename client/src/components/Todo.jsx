import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function Todo({ name, index, updateEditState, editRef }) {
  const [isOver, setIsOver] = useState(false);
  const targetRef = useRef(null);

  function handleOnOver() {
    setIsOver(true);
  }

  function handleOnLeave() {
    setIsOver(false);
  }

  function handelClickEdit(e) {
    e.preventDefault();

    const { top, left, width } = targetRef.current.getBoundingClientRect();
    updateEditState({
      show: true,
      dimensions: {
        top: top,
        left: left,
        width: width,
      },
      value: name,
    });
  }

  return (
    <div
      className="todo text-wrap my-1 p-2 rounded"
      ref={targetRef}
      onMouseEnter={handleOnOver}
      onMouseLeave={handleOnLeave}
    >
      {name}
      {isOver && (
        <Button className="edit-button m-1" size="sm" onClick={handelClickEdit}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </Button>
      )}
    </div>
  );
}
