import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Balanced from "../../specialRules/balanced";

class BondingKnife extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSR: "" };
    this.srUpdate = this.srUpdate.bind(this);
  }

  srUpdate(e) {
    this.setState({ activeSR: e.target.value });
    console.log(this.state.activeSR);
  }

  render() {
    let srArea;
    if (this.state.activeSR === "balanced") {
      srArea = <Balanced />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Bonding Knife</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 3</Col>
              <Col xs="2">WS 4+</Col>
              <Col xs="2">D 3/4</Col>
              <Col xs="2">
                SR
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="balanced"
                >
                  Balanced
                </button>
              </Col>
              <Col xs="2">! -</Col>
            </Row>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default BondingKnife;
