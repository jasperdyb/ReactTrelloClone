import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function Todo({ name }) {
  const [isOver, setIsOver] = useState(false);

  function handleOnOver() {
    setIsOver(true);
  }

  function handleOnLeave() {
    setIsOver(false);
  }

  return (
    <div
      className="todo text-wrap my-1 p-2 rounded"
      onMouseEnter={handleOnOver}
      onMouseLeave={handleOnLeave}
    >
      {name}
      {isOver && (
        <Button className="edit-button m-1" size="sm">
          <FontAwesomeIcon icon={faPencilAlt} />
        </Button>
      )}
    </div>
  );
}
