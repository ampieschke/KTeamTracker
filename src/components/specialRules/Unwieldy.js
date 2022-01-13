import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Unwieldy extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Unwieldy</Col>
          <Row>
            <p>
              An operative can only make a shooting attack with this weapon if
              an extra AP is subtracted to perform a shoot action. It cannot
              make a shooting attack with this weapon by performing an overwatch
              action.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Unwieldy;
