import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ShockAssault extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Shock Assault (1CP)</Col>
              <p>
                Until the end of he Turning Point, each time a friendly
                operative is activated, if it does not perform a Shoot action
                during that activation, it can perform two Fight actions during
                that activation.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default ShockAssault;
