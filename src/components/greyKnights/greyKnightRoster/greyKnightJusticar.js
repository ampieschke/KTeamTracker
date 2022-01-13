import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PsychicPowers from "../psychicPowers/psychicPowers";
import StormBolter from "../greyKnightArms/stormBolter";
import NemesisDaemonHammer from "../greyKnightArms/nemesisDH";
import NemesisFalchions from "../greyKnightArms/nemesisFalchions";
import NemesisForceWeapons from "../greyKnightArms/nemesisForceWeapon";
import NemesisWardingStave from "../greyKnightArms/nemesisWardingStave";

class GreyKnightJusticar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Grey Knight Justicar</h2>
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
              <Col xs="4">W 12</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory"></Row>
        <StormBolter />
        <NemesisDaemonHammer />
        <NemesisFalchions />
        <NemesisForceWeapons />
        <NemesisWardingStave />

        <Row className="abilities"></Row>
        <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row>
      </Container>
    );
  }
}
export default GreyKnightJusticar;
