import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

import ShasUi from "../tau/tauRoster/shasUi";
import ShasLa from "../tau/tauRoster/shasLa";
import BloodedPathfinder from "../tau/tauRoster/bloodedPF";
import DroneControlPathfinder from "../tau/tauRoster/droneControlPF";
import AssaultGrenadierPF from "../tau/tauRoster/assaultGrenadierPF";
import TranspectralPathfinder from "../tau/tauRoster/transpectralPathfinder";
import CommsSpecialist from "../tau/tauRoster/communicationsSpecialist";
import MedicalTechPF from "../tau/tauRoster/medicalTechPF";
import WeaponsExpertPF from "../tau/tauRoster/weaponsExpertPF";
import MarksmanPF from "../tau/tauRoster/marksmanPF";

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
    } else if (this.state.activeOperative === "transpectralPF") {
      rosterArea = <TranspectralPathfinder />;
    } else if (this.state.activeOperative === "commsPF") {
      rosterArea = <CommsSpecialist />;
    } else if (this.state.activeOperative === "medTechPF") {
      rosterArea = <MedicalTechPF />;
    } else if (this.state.activeOperative === "weapExpertPF") {
      rosterArea = <WeaponsExpertPF />;
    } else if (this.state.activeOperative === "mmPF") {
      rosterArea = <MarksmanPF />;
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
                className="button-54 tauButton"
                value="shasUi"
                id="shasUi"
              >
                Shas'ui Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="shasLa"
                id="shasLa"
              >
                Shas'la Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="bloodedPF"
                id="bloodedPF"
              >
                Blooded Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="droneControlPF"
                id="droneControlPF"
              >
                Drone Control Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="assaultGrenadierPF"
                id="assaultGrenadierPF"
              >
                Assault Grenadier Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="transpectralPF"
                id="transpectralPF"
              >
                Transpectral Interference Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="commsPF"
                id="commsPF"
              >
                Comms Specialist Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="medTechPF"
                id="medTechPF"
              >
                Medical Technician Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="weapExpertPF"
                id="weapExpertPF"
              >
                Weapons Expert Pathfinder
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="mmPF"
                id="mmPF"
              >
                Marksman Pathfinder
              </button>
            </Col>
            <Col xs="9" className="rightBox">
              {rosterArea}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Tau;
