import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import VeteranGuardsmen from "../armies/veteranGuardsmen";
import AncillarySupport from "./ancillarySupport/ancillarySupport";
import GuardsmenSPloys from "./guardsmenSPloys/guardsmenSPloys";
import GuardsmenTPloys from "./guardsmenTPloys/guardsmenTPloys";

class VeteranGuardsmenSelector extends Component {
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
      activeArea = <VeteranGuardsmen />;
    } else if (this.state.activeChoice === "strategicPloys") {
      activeArea = <GuardsmenSPloys />;
    } else if (this.state.activeChoice === "tacticalPloys") {
      activeArea = <GuardsmenTPloys />;
    } else if (this.state.activeChoice === "ancillary") {
      activeArea = <AncillarySupport />;
    }

    return (
      <Container>
        <h1>Veteran Guardsmen</h1>
        <div>
          <Row className="justify-content-md-center">
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 vGButton"
                value="roster"
                id="roster"
              >
                Roster
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 vGButton"
                value="strategicPloys"
                id="strategicPloys"
              >
                Strategic Ploys
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 vGButton"
                value="tacticalPloys"
                id="tacticalPloys"
              >
                Tactical Ploys
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 vGButton"
                value="ancillary"
                id="ancillary"
              >
                Ancillary Support
              </button>
            </Col>
          </Row>
          <Row>{activeArea}</Row>
        </div>
      </Container>
    );
  }
}

export default VeteranGuardsmenSelector;
