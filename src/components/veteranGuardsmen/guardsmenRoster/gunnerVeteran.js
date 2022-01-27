import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Bayonet from "../guardsmenArms/bayonet";
import Flamer from "../guardsmenArms/flamer";
import GrenadeLauncher from "../guardsmenArms/grenadeLauncher";
import Meltagun from "../guardsmenArms/meltagun";
import PlasmaGun from "../guardsmenArms/plasmaGun";

class GunnerVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Gunner Veteran</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="4">M 3</Col>
              <Col xs="4">APL 2</Col>
              <Col xs="4">GA 2</Col>
            </Row>
            <Row>
              <Col xs="4">DF 3</Col>
              <Col xs="4">SV 5+</Col>
              <Col xs="4">W 7</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <Flamer />
          <GrenadeLauncher />
          <Meltagun />
          <PlasmaGun />
          <Bayonet />
        </Row>

        {/* <Row className="abilities"></Row> */}
        {/* <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row> */}
      </Container>
    );
  }
}
export default GunnerVeteran;
