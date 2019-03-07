import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import GameArea from "./components/GameArea";
import TopNav from "./components/TopNav";


function App() {
  return (
    <div>
      <TopNav />
      <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Wrapper>
      <div>
          <GameArea/>
      </div>

      ;
    </Wrapper>
    </div>
  );
}

export default App;
