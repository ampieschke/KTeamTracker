import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class ArtificialIntel extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Saviour Protocals</Col>
        <Col>
          <p>
            Each time a friendly operative (excludes drones) is selected as the
            target of a shooting attack, if there is a friendly drone within
            CIRCLE of it and not within engagement range of an enemy, if that
            drone is not protecting any other operatives, it can protect that
            friendly operative until the end of the turning point. Until the end
            of the turning point, each time a shooting attack is made against
            that operative, make the shooting attack against the drone instead,
            even if it wouldn't be a valid target. In the roll defense dice
            step, dice cannot be auto retained as a result of cover.
          </p>
        </Col>
      </Container>
    );
  }
}
export default ArtificialIntel;
