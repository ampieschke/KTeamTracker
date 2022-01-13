import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Px extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Px</Col>
          <Row>
            <p>
              Piercing - Each time a friendly operative makes a shooting attack
              with this weapon, in the roll attack dice step of that shooting
              attack, if you ratain any critical hits, the weapon gains the APx
              special rule for that shooting attack. x is the number after the
              weapons P, e.g. P1.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Px;
