import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Heavy extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Heavy </Col>
          <Col xs="7">
            <p>
              An operative cannot perfor a Charge, Fall Back, or Normal Move
              action in the same activation in which it perfoms a Shoot action
              with this ranged weapon.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Heavy;
