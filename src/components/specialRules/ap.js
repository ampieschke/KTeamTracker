import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class AP extends Component {
  render() {
    return (
      <Container>
        <Col className="specialRule">APx </Col>
        <Row>
          <p>
            Armor penetration. Each time a friendly operative makes a shooting
            attack with this weapon, subtract x from the defence of the target.
            If two different APx special rules would be in effect for a shooting
            attack, they are not cumulative - the attacker selects which one to
            use.
          </p>
        </Row>
      </Container>
    );
  }
}
export default AP;
