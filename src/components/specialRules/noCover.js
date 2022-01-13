import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class NoCover extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>No Cover</Col>
          <Row>
            <p>
              Defence dice cannot be automatically retained as a result of being
              in cover.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default NoCover;
