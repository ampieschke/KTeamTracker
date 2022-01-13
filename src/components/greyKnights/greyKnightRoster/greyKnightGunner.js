import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PsychicPowers from "../psychicPowers/psychicPowers";
import Incinerator from "../greyKnightArms/incinerator";
import Psilencer from "../greyKnightArms/psilencer";
import Psycannon from "../greyKnightArms/psycannon";
import Fists from "../greyKnightArms/fists";

class GreyKnightGunner extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Grey Knight Gunner</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="4">M 3</Col>
              <Col xs="4">APL 3</Col>
              <Col xs="4">GA 1</Col>
            </Row>
            <Row>
              <Col xs="4">DF 3</Col>
              <Col xs="4">SV 3+</Col>
              <Col xs="4">W 11</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory"></Row>
        <Incinerator />
        <Psilencer />
        <Psycannon />
        <Fists />

        <Row className="abilities"></Row>
        <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row>
      </Container>
    );
  }
}
export default GreyKnightGunner;
