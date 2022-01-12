import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fists from "../tauArms/fists";
import PulseCarbine from "../tauArms/pulseCarbine";
import MarkerLight from "../tauSpecialRules/markerLight";
import Signal from "../tauSpecialRules/signal";

class CommsSpecialist extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Comms Specialist Pathfinder</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="4">M 3</Col>
              <Col xs="4">APL 2</Col>
              <Col xs="4">GA 1</Col>
            </Row>
            <Row>
              <Col xs="4">DF 3</Col>
              <Col xs="4">SV 5+</Col>
              <Col xs="4">W 7</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <PulseCarbine />
          <Fists />
        </Row>
        <Row className="abilities">
          <Signal />
          <MarkerLight />
        </Row>
        <Row className="uniqueActions"></Row>
      </Container>
    );
  }
}
export default CommsSpecialist;
