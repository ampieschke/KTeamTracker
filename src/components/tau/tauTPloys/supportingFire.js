import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class SupportingFire extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Supporting Fire (1 CP)</Col>
              <p>
                Use this ploy in the firefight phase when a shoot action is
                declared for a friendly operative. Select a target that is
                within engagement range of a friendly operative and within
                PENTAGON of the active operative, and that enemy cannot be in
                cover saa result of friendly operatives bases. Note however the
                enemy operative can still retain a defense die as normal.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default SupportingFire;
