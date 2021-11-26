import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import EMPNade from "../tauArms/empNade";
import Fists from "../tauArms/fists";
import PhotonNade from "../tauArms/photonNade";
import FusionNade from "../tauArms/fusionNade";
import PulseCarbine from "../tauArms/pulseCarbine";
import Grenadier from "../tauSpecialRules/grenadier";
// import MarkerLight from "../tauSpecialRules/markerLight";

class AssaultGrenadierPF extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>AssaultGrenadier Pathfinder</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="2">M 3</Col>
              <Col xs="2">APL 2</Col>
              <Col xs="2">GA 1</Col>
            </Row>
            <Row>
              <Col xs="2">DF 3</Col>
              <Col xs="2">SV 5+</Col>
              <Col xs="2">W 7</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <PulseCarbine />
          <EMPNade />
          <FusionNade />
          <PhotonNade />
          <Fists />
        </Row>
        <Row className="abilities">
          <Grenadier />
        </Row>
        <Row className="uniqueActions"></Row>
      </Container>
    );
  }
}
export default AssaultGrenadierPF;
