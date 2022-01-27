import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class LasPistol extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Laspistol</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 3+</Col>
          <Col>D 2/3</Col>
        </Row>
        <Row>
          <Col>SR: RNG PENTAGON</Col>
        </Row>
      </Container>
    );
  }
}
export default LasPistol;
