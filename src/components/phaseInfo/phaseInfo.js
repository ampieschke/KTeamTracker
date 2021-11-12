import React, { Component } from "react";
import InitiativePhase from "../initiativePhase/InitiativePhase";
import { Col, Row, Container } from "react-bootstrap";
import StrategyPhase from "../strategyPhase/StrategyPhase";
import FireFightPhase from "../fireFightPhase/FireFightPhase";

class PhaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { activePhase: "" };
    this.phaseUpdate = this.phaseUpdate.bind(this);
  }

  phaseUpdate(e) {
    this.setState({ activePhase: e.target.value });
    console.log(this.state.activePhase);
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
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="initiativePhase"
                id="initPhase"
              >
                Initiative Phase
              </button>
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="strategyPhase"
                id="strategyPhase"
              >
                Strategy Phase
              </button>
              <button
                onClick={this.phaseUpdate}
                className="phaseBtn"
                value="firefightPhase"
                id="firefightPhase"
              >
                Firefight Phase
              </button>
            </Col>
            <Col lg="auto" className="rightBox">
              {display}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default PhaseInfo;
