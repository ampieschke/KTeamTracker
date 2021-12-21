import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Hot extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Hot </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative makes a shooting attack with this
              weapon, in the roll attack dice step, for each roll of 1, the
              shooter suffers 3 mortal wounds.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Hot;
