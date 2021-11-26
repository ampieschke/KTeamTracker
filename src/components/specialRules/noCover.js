import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class NoCover extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">No Cover: </Col>
          <Col xs="7">
            <p>
              Defence dice cannot be automatically retained as a result of being
              in cover.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NoCover;
