import React, { Component } from "react";
// import "./App.css";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import pics from "./cards.json";

function App() {
  return (
    <Wrapper>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Click an image to begin!</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link>Score: 0</Nav.Link> |<Nav.Link>Top Score: 0</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
        {pics.map(item => (
          <GameCard image={item.image} id={item.id} />
        ))}

        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      ;
    </Wrapper>
  );
}

export default App;
