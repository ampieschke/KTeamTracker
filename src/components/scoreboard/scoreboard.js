import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { teamOne: 0, teamTwo: 0 };
  }

  upTeamOne = () => {
    this.setState({
      teamOne: this.state.teamOne + 1,
    });
  };

  downTeamOne = () => {
    this.setState({
      teamOne: this.state.teamOne - 1,
    });
  };

  upTeamTwo = () => {
    this.setState({
      teamTwo: this.state.teamTwo + 1,
    });
  };

  downTeamTwo = () => {
    this.setState({
      teamTwo: this.state.teamTwo - 1,
    });
  };

  render() {
    let { teamOne } = this.state;
    let { teamTwo } = this.state;
    return (
      <>
        <Container className="scoreBoard">
          <Row>
            <Col lg="6" className="scoreBoard">
              <h2> Team One </h2>
              <Row className="secondPart">
                <Col className="col-4">
                  <button className="btn" onClick={() => this.downTeamOne()}>
                    -
                  </button>
                </Col>
                <Col className="col-4">
                  <span className="score">{teamOne}</span>
                </Col>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.upTeamOne()}>
                    +
                  </button>
                </Col>
              </Row>
            </Col>

            <Col lg="6" className="scoreBoard">
              <h2> Team Two </h2>
              <Row>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.downTeamTwo()}>
                    -
                  </button>
                </Col>
                <Col className="col-4">
                  <span className="score">{teamTwo}</span>
                </Col>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.upTeamTwo()}>
                    +
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Scoreboard;
