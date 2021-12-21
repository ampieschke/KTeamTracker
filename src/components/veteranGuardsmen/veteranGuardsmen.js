import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

import GreyKnights from "../armies/greyKnights";

class VeteranGuardsmen extends Component {
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
      activeArea = <GreyKnights />;
    }
    // else if (this.state.activeChoice === "strategicPloys") {
    //   activeArea = <GreyKnightGunner />;
    // } else if (this.state.activeChoice === "tacticalPloys") {
    //   activeArea = <GreyKnightJusticar />;
    // }

    return (
      <Container>
        <h1>Grey Knights</h1>
        <div>
          <Row>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 gKButton"
                value="roster"
                id="roster"
              >
                Roster
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 gKButton"
                value="greyKnightWar"
                id="greyKnightWar"
              >
                Strategic Ploys
              </button>
            </Col>
            <Col xs="3">
              <button
                onClick={this.choiceUpdate}
                className="button-54 gKButton"
                value="greyKnightGunner"
                id="greyKnightGunner"
              >
                Tactical Ploys
              </button>
            </Col>
          </Row>
          <Row>{activeArea}</Row>
        </div>
      </Container>
    );
  }
}

export default VeteranGuardsmen;
