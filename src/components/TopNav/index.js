import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavMessage from "../NavMessage"
import "./style.css";

const TopNav = props => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Clicky Game</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link>Click an image to begin!</Nav.Link> */}
        <NavMessage score = {props.score} topScore = {props.topScore}  />

      </Nav>
      <Nav className="mr-auto scoreArea">
        Score: {props.score} <br/> Top Score: {props.topScore}
      </Nav>
    </Navbar>
  );


export default TopNav;
