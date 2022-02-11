import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Ram extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Ram</Col>
        <Row>
          <Col>A 3</Col>
          <Col>WS 5+</Col>
          <Col>D 2/3</Col>
        </Row>
      </Container>
    );
  }
}
export default Ram;
