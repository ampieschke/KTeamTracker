import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Limited extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Limited </Col>
          <Row>
            <p>This weapon can only be used once per battle.</p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Limited;
