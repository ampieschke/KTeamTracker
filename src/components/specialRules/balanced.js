import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Balanced extends Component {
  render() {
    return (
      <Container>
        <Col className="specialRule">Balanced: </Col>
        <Row>
          <p>
            Each time a friendly operative fights in combat or makes a shooting
            attack with this weapon, in the Roll Attack Dice step of that combat
            or shooting attack, you can re-roll one of your dice.
          </p>
        </Row>
      </Container>
    );
  }
}
export default Balanced;
