import React, { Component } from "react";
import InitiativePhase from "../initiativePhase/InitiativePhase";
import { Col, Row, Container } from "react-bootstrap";
import StrategyPhase from "../strategyPhase/StrategyPhase";
import FireFightPhase from "../fireFightPhase/FireFightPhase";
import TurnCounter from "../turnCounter/turnCounter";

class PhaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { activePhase: "" };
    this.phaseUpdate = this.phaseUpdate.bind(this);
  }

  phaseUpdate(e) {
    this.setState({ activePhase: e.target.value });
  }

  render() {
    let display;
    if (this.state.activePhase === "initiativePhase") {
      display = <InitiativePhase />;
    } else if (this.state.activePhase === "strategyPhase") {
      display = <StrategyPhase />;
    } else if (this.state.activePhase === "firefightPhase") {
      display = <FireFightPhase />;
    }
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg="2" className="leftBox">
              <TurnCounter />
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="initiativePhase"
                id="initPhase"
              >
                1. Initiative Phase
              </button>
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="strategyPhase"
                id="strategyPhase"
              >
                2. Strategy Phase
              </button>
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="firefightPhase"
                id="firefightPhase"
              >
                3. Firefight Phase
              </button>
            </Col>
            <Col lg="10" className="rightBox">
              {display}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default PhaseInfo;
