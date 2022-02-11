import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ReconSweep extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Recon Sweep (1 CP)</Col>
              <p>
                Friendly operatives that are wholly within PENTAGON of any
                killzone edge can immediately perform a free Dash action, but
                only if they can finish theat move wholly within PENTAGON of a
                killzone edge that is not your own killzone edge.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default ReconSweep;
