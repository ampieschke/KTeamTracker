import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Reposition extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Reposition (1 CP)</Col>
              <p>
                Use this ploy in the firefight phase when a friendly operative
                is activated. Until the end of the activation, that operative
                can perform Dash actions if it is within Engagement Range of an
                enemy operative and when performing that action, it can move
                within engagement range of enemy operatives, but cannot finish
                that move within engagemenent range of enemy operaives (if that
                is not possible, it cannot perform the action).
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default Reposition;
