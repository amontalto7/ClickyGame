import React from "react";
import Card from "react-bootstrap/Card";

const GameCard = props => 
    // console.log(props);
  (
    <Card 
      className="bg-dark text-white shadow m-2" 
      style={{ width: '9rem'}}
      onClick = {() => props.handleClick(props.id)}>
    <Card.Img src={props.image} alt={props.id} />
    <Card.ImgOverlay>
      {/* <Card.Text>
        Card {props.id}
      </Card.Text> */}
    </Card.ImgOverlay>
    </Card>
  );


export default GameCard;
