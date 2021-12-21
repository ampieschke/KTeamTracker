import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InvulnerableSave extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Invulnerable Save x+ </Col>
          <Col xs="7">
            <p>
              Each time a shooting attack is made against an operative, the
              defender can use its invulnerable save instead of its normal Save
              characteristic. An invulnerable save is used liek a normal save,
              except that it cannot be modified in any way, and is not affected
              by any APx special rules (meaning the defender would use heir
              normal defence characteristic). x of the invulnerable save is the
              dice roll required for the defence dice to be sucessful, e.g. 4+.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default InvulnerableSave;
