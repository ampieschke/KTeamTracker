import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Signal extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Signal (1AP)</Col>
        <Col>
          <p>
            Select one friendly Pathfinder operative within PENTAGON of and
            visible to this operative. Add 1 to its APL. This operative cannot
            perform this action if it is within Engagement Range of an enemy
            operative.
          </p>
        </Col>
      </Container>
    );
  }
}
export default Signal;
