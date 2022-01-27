import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Lasgun extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Lasgun</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 2/3</Col>
        </Row>
      </Container>
    );
  }
}
export default Lasgun;
