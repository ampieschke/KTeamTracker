import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class RamMB extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Ram</Col>
        <Row>
          <Col>A 3</Col>
          <Col>WS 5+</Col>
          <Col>D 3/4</Col>
        </Row>
      </Container>
    );
  }
}
export default RamMB;
