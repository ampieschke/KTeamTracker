import React, { Component } from "react";
import "./style.css";
import { Container } from "react-bootstrap";

class TurnCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { turn: 1 };
  }

  addTurn = () => {
    this.setState({
      turn: this.state.turn + 1,
    });
  };

  backTurn = () => {
    this.setState({
      turn: this.state.turn - 1,
    });
  };

  render() {
    let { turn } = this.state;
    return (
      <>
        <Container className="counter">
          <button onClick={() => this.backTurn()}>-</button>
          <span id="turnCounter"> {turn} </span>
          <button onClick={() => this.addTurn()}>+</button>
        </Container>
      </>
    );
  }
}

export default TurnCounter;
