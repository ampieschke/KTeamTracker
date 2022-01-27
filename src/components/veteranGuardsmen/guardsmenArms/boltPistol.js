import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class BoltPistol extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Bolt Pistol</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 3+</Col>
          <Col>D 3/4</Col>
        </Row>
        <Row>
          <Col>SR: RNG PENTAGON</Col>
        </Row>
      </Container>
    );
  }
}
export default BoltPistol;
