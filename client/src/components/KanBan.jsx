import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import KanBanNav from "./KanBanNav";
import List from "./List";

export default function KanBan() {
  const dummyData = [
    {
      title: "list1",
      todos: [
        {
          name: "todo1",
          finished: false,
        },
        {
          name: "todo2",
          finished: false,
        },
      ],
    },
    {
      title: "list2",
      todos: [
        {
          name: "todo3",
          finished: false,
        },
        {
          name: "todo4",
          finished: false,
        },
      ],
    },
  ];

  const [lists, updateLists] = useState(dummyData);

  return (
    <span>
      <KanBanNav />
      <Container fluid className="board p-1">
        <Row className="m-0">
          {lists.map((list) => (
            <List key={list.title} title={list.title} todos={list.todos} />
          ))}
        </Row>
      </Container>
    </span>
  );
}
