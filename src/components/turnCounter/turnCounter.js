import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

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
          <Col>
            <h2 id="turn"> Turn: </h2>
            <Row>
              <Col lg="2" className="counterBtn">
                <button onClick={() => this.backTurn()}>-</button>
              </Col>
              <Col>
                <h2 id="turnCounter"> {turn} </h2>
              </Col>
              <Col lg="2" className="counterBtn">
                <button onClick={() => this.addTurn()}>+</button>
              </Col>
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default TurnCounter;
