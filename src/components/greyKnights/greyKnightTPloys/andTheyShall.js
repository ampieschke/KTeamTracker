import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class AndTheyShall extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">And They Shall Know No Fear (1CP)</Col>
              <p>
                Use this Tactical Ploy when a friendly operative is activated.
                Until the end of that operative's activation, you can ignore any
                or all modifiers to its APL characteristic and it is not
                injured.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default AndTheyShall;
