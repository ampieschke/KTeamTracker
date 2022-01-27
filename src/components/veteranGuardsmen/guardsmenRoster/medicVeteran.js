import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import Medic from "../../tau/tauSpecialRules/medic";
import Medikit from "../../tau/tauSpecialRules/medikit";

class MedicVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Medic Veteran</h2>
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
          <Lasgun />
          <Bayonet />
        </Row>

        <Row className="abilities">
          <Col>
            <h3 className="text-center">Abilities: </h3>
            <Row>
              <Medic />
            </Row>
          </Col>
        </Row>
        <Row className="uniqueActions">
          <Col>
            <h3 className="text-center">Unique Actions: </h3>
            <Row>
              <Medikit />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MedicVeteran;
