import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class MultiSpectralSensor extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Multi-Spectral Sensor</Col>
        <Col>
          <p>
            Each time this operative makes a shooting attack, when selecting a
            valid target for that shooting attack, enemyoperatives are not
            Obscured.
          </p>
        </Col>
      </Container>
    );
  }
}
export default MultiSpectralSensor;
