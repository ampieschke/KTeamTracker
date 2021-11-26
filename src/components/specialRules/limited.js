import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Limited extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Limited: </Col>
          <Col xs="7">
            <p>This weapon can only be used once per battle.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Limited;
