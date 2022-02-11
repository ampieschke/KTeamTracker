import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AWorthyCause from "./aWorthyCause";
import Reposition from "./reposition";
import SupportingFire from "./supportingFire";

class TauTPloys extends Component {
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
    if (this.state.activeOperative === "worthyCause") {
      rosterArea = <AWorthyCause />;
    } else if (this.state.activeOperative === "reposition") {
      rosterArea = <Reposition />;
    } else if (this.state.activeOperative === "supFire") {
      rosterArea = <SupportingFire />;
    }

    return (
      <Container>
        <div>
          <h3>Tactical Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="worthyCause"
                id="worthyCause"
              >
                A Worthy Cause
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="supFire"
                id="supFire"
              >
                Supporting Fire
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 tauButton"
                value="reposition"
                id="reposition"
              >
                Reposition
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

export default TauTPloys;
