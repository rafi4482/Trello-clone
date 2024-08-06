import React from "react";
import List from "./List";

function Board() {
  return (
    <div className="board">
      <h2>My Trello board</h2>
      <div className="lists">
        <List
          title="To do"
          cards={["Project planning", "Kickoff meeting", "Kickoff meeting"]}
        />
        <List title="Doing" cards={[]} />
        <List title="Done" cards={[]} />
      </div>
    </div>
  );
}

export default Board;
