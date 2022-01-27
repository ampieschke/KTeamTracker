import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import BoltPistol from "../guardsmenArms/boltPistol";
import BoltGun from "../guardsmenArms/boltgun";
import LasPistol from "../guardsmenArms/lasPistol";
import Chainsword from "../guardsmenArms/chainsword";
import GuardsmenOrders from "../guardsmenOrders/guardsmenOrders";

class ConfidantVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Confidant Veteran</h2>
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
          <BoltPistol />
          <BoltGun />
          <LasPistol />
          <Lasgun />
          <Bayonet />
          <Chainsword />
        </Row>

        <Row className="abilities">
          <Col>
            <h3 className="text-center">Abilities: </h3>

            <Row>
              <h3>Directive</h3>
            </Row>
            <Row>
              <p>
                Each time this operative is activated, if it has not been
                nominated for command, you can select a ready operative within
                PENTAGON and visible to it. After this operative's activation
                ends, activate that operative, and treat its GA as 1 for that
                activation.
              </p>
            </Row>
            <Row>
              <h3>Second in Command</h3>
            </Row>
            <Row>
              <p>
                If a friendly Sergeant Veteran is incapacitated and removed from
                the killzone, you can nominate this operative for command If you
                do, until the end of the battle, it gains the LEADER keyword and
                the Guardsman Orders Ability
              </p>
            </Row>
            <GuardsmenOrders />
          </Col>
        </Row>
        {/* <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row> */}
      </Container>
    );
  }
}
export default ConfidantVeteran;
