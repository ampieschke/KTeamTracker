import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InDeath extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">In Death Atonement (1CP)</Col>
              <p>
                Use this tactic when a ready friendly operative is
                incapacitated. That operative is not removed from the Killzone
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
export default InDeath;
