import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

import ShasUi from "../tau/tauRoster/shasUi";
import ShasLa from "../tau/tauRoster/shasLa";
import BloodedPathfinder from "../tau/tauRoster/bloodedPF";
import DroneControlPathfinder from "../tau/tauRoster/droneControlPF";
import AssaultGrenadierPF from "../tau/tauRoster/assaultGrenadierPF";

class Tau extends Component {
  constructor(props) {
    super(props);
    this.state = { activeOperative: "" };
    this.rosterUpdate = this.rosterUpdate.bind(this);
  }

  rosterUpdate(e) {
    this.setState({ activeOperative: e.target.value });
  }

  render() {
    let rosterArea;
    if (this.state.activeOperative === "shasUi") {
      rosterArea = <ShasUi />;
    } else if (this.state.activeOperative === "shasLa") {
      rosterArea = <ShasLa />;
    } else if (this.state.activeOperative === "bloodedPF") {
      rosterArea = <BloodedPathfinder />;
    } else if (this.state.activeOperative === "droneControlPF") {
      rosterArea = <DroneControlPathfinder />;
    } else if (this.state.activeOperative === "assaultGrenadierPF") {
      rosterArea = <AssaultGrenadierPF />;
    }

    return (
      <Container>
        <h1>Tau</h1>
        <div>
          <h3>Roster</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="shasUi"
                id="shasUi"
              >
                Shas'ui Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="shasLa"
                id="shasLa"
              >
                Shas'la Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="bloodedPF"
                id="bloodedPF"
              >
                Blooded Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="droneControlPF"
                id="droneControlPF"
              >
                Drone Control Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="assaultGrenadierPF"
                id="assaultGrenadierPF"
              >
                Assault Grenadier Pathfinder
              </button>
            </Col>
            <Col lg="9" className="rightBox">
              {rosterArea}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Tau;
