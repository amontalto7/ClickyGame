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

        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </Nav>
    </Navbar>
  );


export default TopNav;
