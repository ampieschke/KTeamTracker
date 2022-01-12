import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class TideOfCelerity extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Tide of Celerity (1CP)</Col>
              <p>
                Until the end of he Turning Point, each time a friendly
                operative performs a Charge action, it can move an additional
                TRIANGLE for that action.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default TideOfCelerity;
