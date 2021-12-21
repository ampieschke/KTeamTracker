import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Reapx extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Reap x: </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative fights in combat with this weapon,
              in the resolve successful hits step of that combat, if you sstrike
              with a critical hit, inflict x mortal wounds on each other enemy
              operative visible to the friendly operative and within TRIANGLE of
              it or the target operative. x is the number after the weapon's
              reap (e.g. Reap 1).
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Reapx;
