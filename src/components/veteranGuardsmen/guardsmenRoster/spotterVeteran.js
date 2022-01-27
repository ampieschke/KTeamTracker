import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import BionicArm from "../guardsmenArms/bionicArm";
import MorterBarrage from "../guardsmenArms/morterBarrage";

class SpotterVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Spotter Veteran</h2>
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
          <MorterBarrage />
          <Bayonet />
        </Row>

        <Row className="abilities"></Row>
        <Row className="uniqueActions">
          <Col>
            <h3 className="text-center">Unique Actions: </h3>
            <Row>
              <h3>Spotter (2AP)</h3>
            </Row>
            <Row>
              <p>
                Select one enemy operative visible to this operative, then
                select one other ready operative with a GA characteristic of 1
                within CIRCLE of and visible to this operative. After this
                activation ends, you can you can activate that operative, and
                for that activation, it treats that enemy operative as if it has
                an Engage order. Cannot perform this action if within engagement
                range of an enemy.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SpotterVeteran;
