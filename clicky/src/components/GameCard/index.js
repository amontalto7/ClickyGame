import React from "react";
import Card from "react-bootstrap/Card";
// import "./style.css";

function FriendCard(props) {
  console.log(props);

  return (
    <Card>
      <div className="img-container">
        <img
          alt="SpongeBob"
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      </Card>
  );
}

export default FriendCard;
