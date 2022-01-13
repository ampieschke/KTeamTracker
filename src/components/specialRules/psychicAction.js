import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PsychicAction extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Psychic Action</Col>
          <Row>
            <p>
              This is a term for a certain kind of action. This term provides no
              additional rules on its own, but other rules may interact with
              actions that have this term.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default PsychicAction;
