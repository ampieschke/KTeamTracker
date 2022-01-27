import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";

class ZealotVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Zealot Veteran</h2>
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
              <h3>The Emperor Protects</h3>
            </Row>
            <Row>
              <p>
                Each time a shooting attack is made against this operative, you
                can reroll any of your defence dice.
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="uniqueActions">
          <Col>
            <h3 className="text-center">Unique Actions: </h3>
            <Row>
              <h3>Uplifting Primer (1AP)</h3>
            </Row>
            <Row>
              <p>
                Until the end of the Turning Point, while a friendly oeprative
                is within SQUARE of this operative, that friendly operative is
                uplifted. While an operative is uplifted, each time it fights in
                combat or makes a shooting attack, you can select one of your
                results of 5+ to be retained as a critical hit.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ZealotVeteran;
