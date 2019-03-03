import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import Title from "./components/Title";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import pics from "./cards.json"

function App() {
 
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Jumbotron>
          <h1>Clicky Game!</h1>
          <p>
            Click on an image to earn points, but don't click on any more than once!
          </p>
          <GameCard
            image = {pics[2].image}
            id = {pics[2].id}
            />
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>;
      </Wrapper>

      );
  
}

export default App;
