import React, { Component } from "react";
import "./style.css";
import GameCard from "../GameCard";
import data from "../../data.json"
import Wrapper from "../Wrapper";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import TopNav from "../TopNav";

class Game extends Component {

  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleCards(this.state.data)});
  }

  resetData = data => {
    // spread syntax
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // set everything back to clicked : false
    const resetData = data.map(item => ({ ... item, clicked: false }));
    return this.shuffleCards(resetData);
  }


  // shuffle cards by randomly generating new indexes for each element and replacing the original set
  shuffleCards = data => {
    let i = data.length - 1;
    while (i > 0 ) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

render() {
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
      
      <div className = "gameArea">
    {data.map(item => (
        <GameCard key={item.id} image={item.image} id={item.id} />
      ))}
    </div>      

    </Wrapper>
    </div>

  );
}
}
export default Game;



