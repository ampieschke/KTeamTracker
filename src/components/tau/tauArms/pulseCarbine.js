import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PulseCarbine extends Component {
  render() {
    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Pulse Carbine</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 4</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 4/5</Col>
              <Col xs="2">SR -</Col>
              <Col xs="2">! -</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PulseCarbine;
