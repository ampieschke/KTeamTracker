import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Signal extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Signal (1AP)</Col>
          <Col xs="9">
            <p>
              Select one friendly Pathfinder operative within PENTAGON of and
              visible to this operative. Add 1 to its APL. This operative cannot
              perform this action if it is within Engagement Range of an enemy
              operative.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Signal;
