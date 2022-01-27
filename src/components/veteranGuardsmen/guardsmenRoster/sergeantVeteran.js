import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Bayonet from "../guardsmenArms/bayonet";
import BoltGun from "../guardsmenArms/boltgun";
import BoltPistol from "../guardsmenArms/boltPistol";
import PlasmaPistol from "../guardsmenArms/plasmaPistol";
import LasPistol from "../guardsmenArms/lasPistol";
import Chainsword from "../guardsmenArms/chainsword";
import PowerWeapon from "../guardsmenArms/powerWeapon";
import GuardsmenOrders from "../guardsmenOrders/guardsmenOrders";

class SergentVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Sergent Veteran</h2>
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
          <BoltPistol />
          <BoltGun />
          <LasPistol />
          <PlasmaPistol />
          <Bayonet />
          <Chainsword />
          <PowerWeapon />
        </Row>

        <Row className="abilities">
          <h3 className="text-center">Abilities: </h3>
          <GuardsmenOrders />
        </Row>
        {/* <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row> */}
      </Container>
    );
  }
}
export default SergentVeteran;
