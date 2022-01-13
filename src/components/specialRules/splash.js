import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Splashx extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Splash x </Col>
          <Row>
            <p>
              Each time a friendly operative makes a shooting attack with this
              weapon, in the roll attack dice step, for each critical hit
              retained, inflict x mortal wounds on the target and each other
              operative visible to and within CIRCLE of it. x is the numner
              after the weapon's splash, e.g. Spalsh 1.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Splashx;
