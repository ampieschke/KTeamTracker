import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Unwieldy extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Unwieldy</Col>
          <Col xs="7">
            <p>
              An operative can only make a shooting attack with this weapon if
              an extra AP is subtracted to perform a shoot action. It cannot
              make a shooting attack with this weapon by performing an overwatch
              action.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Unwieldy;
