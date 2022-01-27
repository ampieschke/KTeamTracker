import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class BoltGun extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Boltgun</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 3+</Col>
          <Col>D 3/4</Col>
        </Row>
      </Container>
    );
  }
}
export default BoltGun;
