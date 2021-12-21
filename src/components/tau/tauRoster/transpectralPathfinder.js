import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fists from "../tauArms/fists";
import PulseCarbine from "../tauArms/pulseCarbine";
import MarkerLight from "../tauSpecialRules/markerLight";
import MultiSpectralSensor from "../tauSpecialRules/multiSpectralSensor";
import SystemJam from "../tauSpecialRules/systemjam";

class TranspectralPathfinder extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Transpectral Interference Pathfinder</h2>
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
          <Fists />
        </Row>
        <Row className="abilities">
          <MultiSpectralSensor />
          <MarkerLight />
          <SystemJam />
        </Row>
        <Row className="uniqueActions"></Row>
      </Container>
    );
  }
}
export default TranspectralPathfinder;
