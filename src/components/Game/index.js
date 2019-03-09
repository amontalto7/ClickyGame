import React, { Component } from "react";
import "./style.css";
import GameCard from "../GameCard";
import data from "../../data.json"
import Wrapper from "../Wrapper";
import TopNav from "../TopNav";
import JumbotronInstructions from "../JumbotronInstructions";

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
    // spread syntax ...
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // set everything back to clicked : false
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleCards(resetData);
  }

  handleCorrect = newData => {
    const {topScore, score} = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleCards(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleWrongGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

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

  handleClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item};
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
    }
    return newItem;
    });
    guessedCorrectly ? this.handleCorrect(newData) : this.handleWrongGuess(newData);
  }

render() {
  return (
    <div>
      <TopNav score = {this.state.score} topScore = {this.state.topScore}/>
      <Wrapper>
      <JumbotronInstructions/>
      <div className = "gameArea">
    {this.state.data.map(item => (
        <GameCard 
          key={item.id} 
          image={item.image} 
          id={item.id}
          handleClick={this.handleClick} />
      ))}
    </div>      

    </Wrapper>
    </div>

  );
}
}
export default Game;



