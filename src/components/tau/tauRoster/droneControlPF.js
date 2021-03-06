import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fists from "../tauArms/fists";
import PulseCarbine from "../tauArms/pulseCarbine";
import ControlDrone from "../tauSpecialRules/controlDrone";
import DroneScout from "../tauSpecialRules/droneScout";
import MarkerLight from "../tauSpecialRules/markerLight";

class DroneControlPathfinder extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Drone Control Pathfinder</h2>
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
          <h3 className="text-center">Abilities: </h3>

          <DroneScout />
        </Row>
        <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <ControlDrone />
          <MarkerLight />
        </Row>
      </Container>
    );
  }
}
export default DroneControlPathfinder;
