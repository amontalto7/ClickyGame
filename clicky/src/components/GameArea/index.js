import React from "react";
import "./style.css";
import GameCard from "../GameCard";
import pics from "../../cards.json"


function GameArea(props) {

  return (
      <div className = "gameArea">
    {pics.map(item => (
        <GameCard image={item.image} id={item.id} />
      ))}
    </div>
  );
}

export default GameArea;



