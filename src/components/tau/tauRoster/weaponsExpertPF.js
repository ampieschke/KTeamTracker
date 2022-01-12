import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fists from "../tauArms/fists";
import IonRifle from "../tauArms/ionRifle";
import RailRifle from "../tauArms/railRifle";

class WeaponsExpertPF extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2> Weapons Expert Pathfinder</h2>
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
          <IonRifle />
          <RailRifle />
          <Fists />
        </Row>
        <Row className="abilities"></Row>
        <Row className="uniqueActions"></Row>
      </Container>
    );
  }
}
export default WeaponsExpertPF;
