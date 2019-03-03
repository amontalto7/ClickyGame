import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import Title from "./components/Title";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function App() {
 
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <GameCard
            name = {"Anthony"}
            occupation = {"Dev"}
            location = {"NYC"}
            image = {"https://amontalto7.github.io/assets/images/profilepic.jpg"}

            />
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>;
      </Wrapper>

      );
  
}

export default App;
