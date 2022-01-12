import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Fists extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Fists</Col>
        <Row>
          <Col>A 3</Col>
          <Col>WS 5+</Col>
          <Col>D 2/3</Col>
        </Row>
      </Container>
    );
  }
}
export default Fists;
