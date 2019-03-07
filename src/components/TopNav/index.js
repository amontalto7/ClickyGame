import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Click an image to begin!</Nav.Link>
      </Nav>
      <Nav className="mr-auto scoreArea">
        <span className="score">Score: 0 </span><span className="topScore"> | Top Score: 0</span>
      </Nav>
    </Navbar>
  );
}

export default TopNav;
