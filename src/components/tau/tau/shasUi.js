import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ShasUi extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Shas'Ui Pathfinder</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="2">M 3</Col>
              <Col xs="2">APL 2</Col>
              <Col xs="2">GA 1</Col>
            </Row>
            <Row>
              <Col xs="2">DF 3</Col>
              <Col xs="2">SV 5+</Col>
              <Col xs="2">W 8</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ShasUi;
