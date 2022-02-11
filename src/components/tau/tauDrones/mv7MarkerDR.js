import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Ram from "../tauArms/ram";
import ArtificialIntel from "../tauSpecialRules/artificialIntel";
import HighIntensityMarkerlight from "../tauSpecialRules/highIntensityMarker";
import MarkerLight from "../tauSpecialRules/markerLight";
import SaviorProticals from "../tauSpecialRules/saviourProtocols";
import ShieldGenerator from "../tauSpecialRules/shieldGen";

class MVSevenDrone extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>MV7 Marker Drone</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="2">M 3</Col>
              <Col xs="2">APL 2</Col>
              <Col xs="2">GA 1</Col>
            </Row>
            <Row>
              <Col xs="2">DF 3</Col>
              <Col xs="2">SV 4+</Col>
              <Col xs="2">W 7</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <Ram />
        </Row>
        <Row className="abilities">
          <ArtificialIntel />
          <SaviorProticals />
          <HighIntensityMarkerlight />
        </Row>
        <Row className="uniqueActions">
          <MarkerLight />
        </Row>
      </Container>
    );
  }
}
export default MVSevenDrone;
