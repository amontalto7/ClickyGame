import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

function JumbotronInstructions() {
    return (
        <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
      </Jumbotron>

    )
}


export default JumbotronInstructions;
