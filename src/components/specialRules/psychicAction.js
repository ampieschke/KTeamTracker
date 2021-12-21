import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PsychicAction extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Psychic Action</Col>
          <Col xs="7">
            <p>
              This is a term for a certain kind of action. This term provides no
              additional rules on its own, but other rules may interact with
              actions that have this term.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PsychicAction;
