import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import RamMB from "../tauArms/ramMB";
import BurstCannon from "../tauArms/burstCannon";
import ArtificialIntel from "../tauSpecialRules/artificialIntel";
import SaviorProticals from "../tauSpecialRules/saviourProtocols";
import Analyse from "../tauSpecialRules/analyse";

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
          <BurstCannon />
          <RamMB />
        </Row>
        <Row className="abilities">
          <ArtificialIntel />
          <SaviorProticals />
        </Row>
        <Row className="uniqueActions">
          <Analyse />
        </Row>
      </Container>
    );
  }
}
export default MBThreeReconDrone;
