import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import TrenchClub from "../guardsmenArms/trenchClub";

class BruiserVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Bruiser Veteran</h2>
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
          <TrenchClub />
        </Row>

        <Row className="abilities">
          <Col>
            <h3 className="text-center">Abilities: </h3>
            <Row>
              <h3>Bruiser</h3>
            </Row>
            <Row>
              <p>
                Once per Turning Point, when this operative fights in combat,
                when resolving hits, you can ignore the damage inflicted from
                one normal hit.
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
export default BruiserVeteran;
