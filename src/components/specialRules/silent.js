import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Silent extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Silent: </Col>
          <Col xs="7">
            <p>Can perform Shoot actions with a Conceal order.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Silent;
