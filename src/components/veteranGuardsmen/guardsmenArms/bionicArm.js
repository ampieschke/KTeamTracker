import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class BionicArm extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Bionic Arm</Col>
        <Row>
          <Col>A 3</Col>
          <Col>BS 4+</Col>
          <Col>D 4/5</Col>
        </Row>
      </Container>
    );
  }
}
export default BionicArm;
