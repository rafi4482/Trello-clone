import React from "react";
import Card from "./Card";

function List({ title, cards }) {
  return (
    <div className="list">
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} text={card} />
      ))}
      <button className="add-card">+ Add a card</button>
    </div>
  );
}

export default List;
