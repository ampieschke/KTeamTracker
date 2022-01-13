import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import EMPNade from "../tauArms/empNade";
import Fists from "../tauArms/fists";
import PhotonNade from "../tauArms/photonNade";
import FusionNade from "../tauArms/fusionNade";
import PulseCarbine from "../tauArms/pulseCarbine";
import Grenadier from "../tauSpecialRules/grenadier";
import MarkerLight from "../tauSpecialRules/markerLight";
import NanocrystallineHeadgear from "../tauSpecialRules/nanocrystallineHG";

class AssaultGrenadierPF extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Assault Grenadier Pathfinder</h2>
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
          <EMPNade />
          <FusionNade />
          <PhotonNade />
          <Fists />
        </Row>
        <Row className="abilities">
          <h3 className="text-center">Abilities: </h3>
          <Grenadier />
          <NanocrystallineHeadgear />
        </Row>
        <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <MarkerLight />
        </Row>
      </Container>
    );
  }
}
export default AssaultGrenadierPF;
