import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class AP extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">APx </Col>
          <Col xs="7">
            <p>
              Armor penetration. Each time a friendly operative makes a shooting
              attack with this weapon, subtract x from the defence of the
              target. If two different APx special rules would be in effect for
              a shooting attack, they are not cumulative - the attacker selects
              which one to use.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AP;
