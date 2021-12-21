import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fists from "../tauArms/fists";
import PulseCarbine from "../tauArms/pulseCarbine";
import MarkerLight from "../tauSpecialRules/markerLight";

class MBThreeReconDrone extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>MB3 Recon Drone</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="2">M 3</Col>
              <Col xs="2">APL 2</Col>
              <Col xs="2">GA 1</Col>
            </Row>
            <Row>
              <Col xs="2">DF 4</Col>
              <Col xs="2">SV 4+</Col>
              <Col xs="2">W 12</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <PulseCarbine />
          <Fists />
        </Row>
        <Row className="abilities">
          <MarkerLight />
        </Row>
        <Row className="uniqueActions"></Row>
      </Container>
    );
  }
}
export default MBThreeReconDrone;
