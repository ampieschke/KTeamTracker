import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class MWx extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>MWx </Col>
          <Row>
            <p>
              Mortal Wounds - each time a friendly operative makes a shooting
              attack with this weapon, in the roll attack dice step of that
              shooting attack, for each critical hit retained, inflict x mortal
              wounds on the target. x is the number after the weapon's MW e.g.
              MW3.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default MWx;
