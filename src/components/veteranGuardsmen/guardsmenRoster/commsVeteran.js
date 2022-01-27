import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";

class CommsVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Comms Veteran</h2>
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
              <h3>Relay Orders</h3>
            </Row>
            <Row>
              <p>
                Once in each Turning Point, when this operative is issued a
                Guardsmen Order, it can relay it. If an order is relayed,
                subtract 1 from this operatives APL and all friendly operatives
                are issued that order.
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="uniqueActions">
          <Col>
            <h3 className="text-center">Unique Actions: </h3>
            <Row>
              <h3>Signal (1AP)</h3>
            </Row>
            <Row>
              <p>
                Select one operative within TRIANGLE of and visible to this
                operative. Add 1 to its APL. Cannot perform this action if in
                engagement range of an enemy.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CommsVeteran;
