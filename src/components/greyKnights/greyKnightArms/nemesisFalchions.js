import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Relentless from "../../specialRules/relentless";

class NemesisFalchions extends Component {
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
    if (this.state.activeSR === "relentless") {
      srArea = <Relentless />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Nemesis Falchions</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">WS 3+</Col>
              <Col xs="2">D 4/5</Col>
              <Col xs="2">
                SR -{" "}
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="relentless"
                >
                  Relentless
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
export default NemesisFalchions;
