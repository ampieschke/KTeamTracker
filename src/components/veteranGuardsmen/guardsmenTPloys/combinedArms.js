import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class CombinedArms extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Combined Arms (1CP)</Col>
              <p>
                Use this tactic after rolling your attack dice for a shooting
                attack. If the target of that attack was targeted by another
                friendly oeprative with a shooting attack during this Turning
                Point, you can re-roll any of your attack dice for this shooting
                attack.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default CombinedArms;
