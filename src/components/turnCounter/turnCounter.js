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
        <Container className="counter ">
          <Row className="justify-content-md-center">
            <Col className="col-4 Btn">
              <button className="button-53" onClick={() => this.backTurn()}>
                -
              </button>
            </Col>
            <Col className="col-4">
              {" "}
              <h2 id="turn"> Turn: {turn}</h2>
            </Col>
            <Col className="col-4 Btn">
              <button className="button-53" onClick={() => this.addTurn()}>
                +
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TurnCounter;
