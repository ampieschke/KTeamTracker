import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Stun extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Stun: </Col>
          <Row>
            <p>
              Each time a friendly operative makes a shooting attack with this
              weapon, in the roll attack dice step, if you retain any critical
              hits, subtract 1 from the target's APL. Each time a friendly
              operative fights in combat with this weapon, in the resolve
              successful hits step:
              <ul>
                <li>
                  The first time you strike with a critical hit, select one of
                  your opponent's normal hits from that combat to be discarded.
                </li>
                <li>
                  The second time you strike with a critical hit, subtract 1
                  from the target's APL
                </li>
              </ul>
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Stun;
