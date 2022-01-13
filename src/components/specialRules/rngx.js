import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Rngx extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Rng x </Col>
          <Row>
            <p>
              Range. Each time a friendly operative makes a shooting attack with
              this weapon, only operatives within x are a valid target. x is the
              distance after the weapon's Rng, e.g. Rng PENTAGON. All other
              rules for selecting a valid target still apply.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Rngx;
