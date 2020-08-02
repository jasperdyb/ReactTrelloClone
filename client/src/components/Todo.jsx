import React from "react";

export default function Todo({ name }) {
  return <div className="todo text-wrap my-1 p-2 rounded">{name}</div>;
}
