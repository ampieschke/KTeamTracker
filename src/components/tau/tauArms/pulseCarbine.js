import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PulseCarbine extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Pulse Carbine</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 4/5</Col>
        </Row>
      </Container>
    );
  }
}
export default PulseCarbine;
