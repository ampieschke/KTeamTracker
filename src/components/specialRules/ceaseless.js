import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Ceaseless extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Ceaseless </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative fights in combat or makes a
              shooting attack with this weapon, in the Roll Attack Dice step of
              that combat or shooting attack, you can re-roll any or all of our
              attack dice results of 1.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Ceaseless;
