import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class LethalX extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Lethal x </Col>
          <Row>
            <p>
              Each time an attack is made with this weapon, in the Roll Attack
              Dice step, your successful attack dice results of equal or greater
              to x are critical hits. x is the number after the weapon's Lethal,
              e.g. Lethal 5+.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default LethalX;
