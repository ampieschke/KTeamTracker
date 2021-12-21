import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Relentless extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Relentless: </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative fights in combat or makes a
              shooting attack with this weapon, in the roll attack dice step of
              that combat or shooting attack, you can re-roll any or all of your
              attack dice.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Relentless;
