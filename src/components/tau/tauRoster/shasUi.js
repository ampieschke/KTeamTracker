import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import BondingKnife from "../tauArms/bondingKnife";
import PulseCarbineSU from "../tauArms/pulseCarbineSU";
import ArtofWar from "../tauSpecialRules/artOfWar";
import HolographicReadout from "../tauSpecialRules/holographicReadout";
import MarkerLight from "../tauSpecialRules/markerLight";

class ShasUi extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Shas'Ui Pathfinder</h2>
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
              <Col xs="4">W 8</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <PulseCarbineSU />
          <BondingKnife />
        </Row>
        <Row className="abilities">
          <h3 className="text-center">Abilities: </h3>
          <ArtofWar />
          <HolographicReadout />
        </Row>
        <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <MarkerLight />
        </Row>
      </Container>
    );
  }
}
export default ShasUi;
