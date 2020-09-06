import React from "react";
import KanBan from "./containers/KanBan";
import "./styles/app.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App ">
        <KanBan></KanBan>
      </div>
    </DndProvider>
  );
}

export default App;
