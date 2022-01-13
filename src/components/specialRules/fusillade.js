import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Fusillade extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Fusillade </Col>
          <Row>
            <p>
              Each time a friendly operative performs a shoot action and selects
              this weapon, after selecting a vaild target, you canselect any
              number of other valid targets within CIRCLE of the original
              target. Distribute your attack dice between the targets you have
              selected. Make a shooting attack with this weapon (using the same
              profile) against each of the targets you have selected using the
              attack dice you have distributed to each of them.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Fusillade;
