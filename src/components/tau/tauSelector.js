import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Tau from "../armies/tau";
import TauCards from "../tests/tauCards";
class TauSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { activeChoice: "" };
    this.choiceUpdate = this.choiceUpdate.bind(this);
  }

  choiceUpdate(e) {
    this.setState({ activeChoice: e.target.value });
  }

  render() {
    let activeArea;
    if (this.state.activeChoice === "roster") {
      activeArea = <Tau />;
    } else if (this.state.activeChoice === "rosterCards") {
      activeArea = <TauCards />;
    }
    // else if (this.state.activeChoice === "strategicPloys") {
    //   activeArea = <GreyKnightGunner />;
    // } else if (this.state.activeChoice === "tacticalPloys") {
    //   activeArea = <GreyKnightJusticar />;
    // }

    return (
      <Container>
        <h1>Tau</h1>
        <div>
          <Row>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 tauButton"
                value="roster"
                id="roster"
              >
                Roster
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 tauButton"
                value="greyKnightWar"
                id="greyKnightWar"
              >
                Strategic Ploys
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 tauButton"
                value="greyKnightGunner"
                id="greyKnightGunner"
              >
                Tactical Ploys
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 tauButton"
                value="rosterCards"
                id="rosterCards"
              >
                Roster Beta
              </button>
            </Col>
          </Row>
          <Row>{activeArea}</Row>
        </div>
      </Container>
    );
  }
}

export default TauSelector;
