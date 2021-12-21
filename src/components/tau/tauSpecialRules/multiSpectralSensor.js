import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class MultiSpectralSensor extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Multi-Spectral Sensor</Col>
          <Col xs="9">
            <p>
              Each time this operative makes a shooting attack, when selecting a
              valid target for that shooting attack, enemyoperatives are not
              Obscured.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MultiSpectralSensor;
