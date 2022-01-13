import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Heavy extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Heavy </Col>
          <Row>
            <p>
              An operative cannot perfor a Charge, Fall Back, or Normal Move
              action in the same activation in which it perfoms a Shoot action
              with this ranged weapon.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Heavy;
