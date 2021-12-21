import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { teamOne: 0, teamTwo: 0, cpOne: 2, cpTwo: 2 };
  }

  //Scoring//
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

  //CP Count//
  upcpOne = () => {
    this.setState({
      cpOne: this.state.cpOne + 1,
    });
  };

  downcpOne = () => {
    this.setState({
      cpOne: this.state.cpOne - 1,
    });
  };

  upcpTwo = () => {
    this.setState({
      cpTwo: this.state.cpTwo + 1,
    });
  };

  downcpTwo = () => {
    this.setState({
      cpTwo: this.state.cpTwo - 1,
    });
  };

  render() {
    let { teamOne } = this.state;
    let { teamTwo } = this.state;
    let { cpOne } = this.state;
    let { cpTwo } = this.state;

    return (
      <>
        <Container className="scoreBoard">
          {/* Scoring */}
          <Row>
            <Col lg="6">
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

            <Col lg="6">
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
          {/* CP Counter */}
          <Row>
            <Col lg="6">
              <Row className="secondPart">
                <Col className="col-4">
                  <button className="btn" onClick={() => this.downcpOne()}>
                    -
                  </button>
                </Col>
                <Col className="col-4">
                  <span className="score">{cpOne} CP</span>
                </Col>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.upcpOne()}>
                    +
                  </button>
                </Col>
              </Row>
            </Col>

            <Col lg="6">
              <Row>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.downcpTwo()}>
                    -
                  </button>
                </Col>
                <Col className="col-4">
                  <span className="score">{cpTwo} CP</span>
                </Col>
                <Col className="col-4">
                  <button className="btn" onClick={() => this.upcpTwo()}>
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
