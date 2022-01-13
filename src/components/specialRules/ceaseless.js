import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Ceaseless extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Ceaseless </Col>
          <Row>
            <p>
              Each time a friendly operative fights in combat or makes a
              shooting attack with this weapon, in the Roll Attack Dice step of
              that combat or shooting attack, you can re-roll any or all of our
              attack dice results of 1.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Ceaseless;
