import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Indirect from "../../specialRules/indirect";
import LethalX from "../../specialRules/lethalX";
import Limited from "../../specialRules/limited";

class EMPNade extends Component {
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
    if (this.state.activeSR === "lethalX") {
      srArea = <LethalX />;
    } else if (this.state.activeSR === "limited") {
      srArea = <Limited />;
    } else if (this.state.activeSR === "indirect") {
      srArea = <Indirect />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">EMP Grenade</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 4</Col>
              <Col xs="2">BS 3+</Col>
              <Col xs="2">D 2/3</Col>
              <Col xs="2">
                SR
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="lethalX"
                >
                  Lethal x
                </button>
                x = the target's unmodified save characteristic.
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="limited"
                >
                  Limited
                </button>
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="indirect"
                >
                  Indirect
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
export default EMPNade;
