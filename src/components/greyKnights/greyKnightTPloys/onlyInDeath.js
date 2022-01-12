import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class OnlyInDeath extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Only in Death Does Duty End (1CP)</Col>
              <p>
                Use this Tactical Ploy when a ready friendly operative is
                incapacitated. That operative is not removed from the killzone
                until the end of your next activation and does not count as
                being injured.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default OnlyInDeath;
