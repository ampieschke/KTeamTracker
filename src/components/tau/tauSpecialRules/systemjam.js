import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class SystemJam extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">System Jam (1AP)</Col>
        <Col>
          <p>
            Select one enemy operative visable to this operative. Subtract 1
            from its APL. This operative cannot perform this action if it has a
            Conceal order or if it is within Engagement Range of an enemy
            operative.
          </p>
        </Col>
      </Container>
    );
  }
}
export default SystemJam;
