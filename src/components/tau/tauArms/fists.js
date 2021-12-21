import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Fists extends Component {
  render() {
    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Fists</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 3</Col>
              <Col xs="2">WS 5+</Col>
              <Col xs="2">D 2/3</Col>
              <Col xs="2">SR -</Col>
              <Col xs="2">! -</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Fists;