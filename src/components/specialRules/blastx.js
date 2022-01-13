import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class BlastX extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Blast X </Col>
          <Row>
            <p>
              Each time a friendly operative performs a Shoot action and selects
              this weapon (or in the case of profiles, this weapons profile),
              after making the shooting attack against the target, make a
              shooting attack with this weapon (using the same profile) against
              each other operative within x of the original target. When
              deermining if each other operative is a valid target or in cover,
              treat the original target as the active operative. An operative
              cannot make a shooting attack with this weapon by performing an
              Overwatch action.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default BlastX;
