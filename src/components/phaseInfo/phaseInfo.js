import React, { Component } from "react";
import "./style.css";
import InitiativePhase from "../initiativePhase/InitiativePhase";
import { Col, Row, Container } from "react-bootstrap";
import StrategyPhase from "../strategyPhase/StrategyPhase";
import FireFightPhase from "../fireFightPhase/FireFightPhase";
import TurnCounter from "../turnCounter/turnCounter";
import SetUp from "../setUp/setUp";
import ControllingObjectives from "../otherStuff/controllingObjectives";
import LineOfSight from "../otherStuff/lineOfSight";

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
    } else if (this.state.activePhase === "setUp") {
      display = <SetUp />;
    } else if (this.state.activePhase === "objectives") {
      display = <ControllingObjectives />;
    } else if (this.state.activePhase === "los") {
      display = <LineOfSight />;
    }
    return (
      <div className="phaseOrder">
        <Container>
          <Row>
            <Col lg="2" className="leftBox">
              <TurnCounter />
              <div className="btnSection">
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="setUp"
                  id="setUp"
                >
                  Setting Up
                </button>
              </div>
              <div className="btnSection">
                <h3>Round Flow</h3>
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="initiativePhase"
                  id="initPhase"
                >
                  1. Initiative Phase
                </button>
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="strategyPhase"
                  id="strategyPhase"
                >
                  2. Strategy Phase
                </button>
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="firefightPhase"
                  id="firefightPhase"
                >
                  3. Firefight Phase
                </button>
              </div>
              <div className="btnSection">
                <h3>Other Stuff</h3>
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="objectives"
                  id="objectives"
                >
                  Controlling Objectives
                </button>
                <button
                  onClick={this.phaseUpdate}
                  className="phaseBtn button-53"
                  value="los"
                  id="los"
                >
                  Line of Sight
                </button>
              </div>
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
