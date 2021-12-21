import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PsychicPowers from "../psychicPowers/psychicPowers";
import Incinerator from "../greyKnightArms/incinerator";
import Psilencer from "../greyKnightArms/psilencer";
import Psycannon from "../greyKnightArms/psilencer";
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
              <Col xs="2">M 3</Col>
              <Col xs="2">APL 3</Col>
              <Col xs="2">GA 1</Col>
            </Row>
            <Row>
              <Col xs="2">DF 3</Col>
              <Col xs="2">SV 3+</Col>
              <Col xs="2">W 11</Col>
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
          <PsychicPowers />
        </Row>
      </Container>
    );
  }
}
export default GreyKnightGunner;
