import React, { Component } from "react";
// import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import TakeCover from "../../veteranGuardsmen/guardsmenSPloys/takeCover";
import Bonded from "./bonded";
import DeterminedTactician from "./determinedTact";
import ReconSweep from "./reconSweep";

class TauSPloys extends Component {
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
    if (this.state.activeOperative === "reconSweep") {
      rosterArea = <ReconSweep />;
    } else if (this.state.activeOperative === "takeCover") {
      rosterArea = <TakeCover />;
    } else if (this.state.activeOperative === "bonded") {
      rosterArea = <Bonded />;
    } else if (this.state.activeOperative === "determinedTact") {
      rosterArea = <DeterminedTactician />;
    }

    return (
      <Container>
        <div>
          <h3>Strategic Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="reconSweep"
                id="reconSweep"
              >
                Recon Sweep
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="takeCover"
                id="takeCover"
              >
                Take Cover
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="bonded"
                id="bonded"
              >
                Bonded
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="determinedTact"
                id="determinedTact"
              >
                Determined Tactician
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

export default TauSPloys;
