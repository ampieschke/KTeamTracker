import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class Medic extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Medic!</Col>
        <Col>
          <p>
            Once per turning point, the first time a friendly operative
            (excluding drones) would be incapacitated while visible to and
            within SQUARE of this operative and not within engagement range of
            an enemy operative, if this operative is also not within engagement
            range of an enemy operative, this operative can revive it. That
            friendly operative is not incapacitated, has 1 wound remaining, and
            if it would have been incapacitated by a shooting attack, any
            remaining attack dice are discarded. That friednly operative can
            then perform a free dash action, but must finish within TRIANGLE of
            this operative. Subtract 1 from both operatives' APL.
          </p>
        </Col>
      </Container>
    );
  }
}
export default Medic;
