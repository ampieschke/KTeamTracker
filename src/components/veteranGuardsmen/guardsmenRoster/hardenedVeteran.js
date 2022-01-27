import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import BionicArm from "../guardsmenArms/bionicArm";

class HardenedVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Hardened Veteran</h2>
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
          <BionicArm />
        </Row>

        <Row className="abilities">
          <Col>
            <h3 className="text-center">Abilities: </h3>
            <Row>
              <h3>Hardened by War</h3>
            </Row>
            <Row>
              <p>
                Each time this operative would lose a wound,roll a D6: on a 5+,
                that wound is not lost. You can ignore any or all modifiers to
                this operatives APL.
              </p>
            </Row>
          </Col>
        </Row>
        {/* <Row className="uniqueActions">
          <Col>
            <h3 className="text-center">Unique Actions: </h3>
          </Col>
        </Row> */}
      </Container>
    );
  }
}
export default HardenedVeteran;
