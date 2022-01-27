import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Lasgun from "../guardsmenArms/lasgun";
import Bayonet from "../guardsmenArms/bayonet";
import RemoteMine from "../guardsmenArms/remoteMine";

class DemolitionVeteran extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Demolition Veteran</h2>
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
          <RemoteMine />
          <Bayonet />
        </Row>

        <Row className="abilities">
          <Col>
            <h3 className="text-center">Abilities: </h3>
            <Row>
              <h3>*Detonate</h3>
            </Row>
            <Row>
              <p>
                Each time this operative makes a shooting attack with its remote
                mine, make a shooting attack against each operative within
                SQUARE of the center of the mine token with that weapon. When
                making those shooting attacks, each operative is treated as
                being visible, but when determining if it is in Cover, treat
                this operative's Mine token as the active operative. Then remove
                the mine token. An operative cannot make a shooting attack with
                this weapon by performing an overwatch action or if it's mine is
                not in the Killzone.
              </p>
            </Row>
            <Row>
              <h3>Plant Mine (1AP)</h3>
            </Row>
            <Row>
              <p>
                Place a Mine token within TRIANGLE of this operative, then
                perform a free Dash action. This operative cannot perform this
                action if it is within Engagement Range of an enemy operative,
                or if this operatives Minetoken is already in the Killzone. If
                this operative is incapacitated and removed from the Killzone,
                remove the Mine token as well.
              </p>
            </Row>
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
export default DemolitionVeteran;
