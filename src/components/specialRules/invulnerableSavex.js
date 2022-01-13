import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InvulnerableSave extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Invulnerable Save x+ </Col>
          <Row>
            <p>
              Each time a shooting attack is made against an operative, the
              defender can use its invulnerable save instead of its normal Save
              characteristic. An invulnerable save is used liek a normal save,
              except that it cannot be modified in any way, and is not affected
              by any APx special rules (meaning the defender would use heir
              normal defence characteristic). x of the invulnerable save is the
              dice roll required for the defence dice to be sucessful, e.g. 4+.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default InvulnerableSave;
