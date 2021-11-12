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
              <Row className="justify-content-md-center">
                <Col lg="1" className="">
                  <button
                    className="subtract"
                    onClick={() => this.downTeamOne()}
                  >
                    -
                  </button>
                </Col>
                <Col lg="1">
                  <span className="score">{teamOne}</span>
                </Col>
                <Col lg="1" className="">
                  <button className="add" onClick={() => this.upTeamOne()}>
                    +
                  </button>
                </Col>
              </Row>
            </Col>

            <Col lg="6" className="scoreBoard">
              <h2> Team Two </h2>
              <Row className="justify-content-md-center">
                <Col lg="1" className="">
                  <button
                    className="subtract"
                    onClick={() => this.downTeamTwo()}
                  >
                    -
                  </button>
                </Col>
                <Col lg="1">
                  <span className="score">{teamTwo}</span>
                </Col>
                <Col lg="1" className="">
                  <button className="add" onClick={() => this.upTeamTwo()}>
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
