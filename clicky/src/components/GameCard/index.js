import React from "react";
import Card from "react-bootstrap/Card";
// import "./style.css";

function GameCard(props) {
  console.log(props);

  return (
    <Card className="bg-dark text-white" style={{ width: '10rem'}}>
    <Card.Img src={props.image} alt={props.id} />
    <Card.ImgOverlay>
      <Card.Text>
        Card {props.id}
      </Card.Text>
    </Card.ImgOverlay>
    </Card>
  );
}

export default GameCard;
