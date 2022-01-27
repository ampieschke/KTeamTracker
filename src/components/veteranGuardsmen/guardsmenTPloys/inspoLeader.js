import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InspoLeader extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Inspirational Leadership (1CP)</Col>
              <p>
                Use this tactic during a Guardsmen Leader operative's
                activation. That operative issues a Guardsmen Order to all
                friendly operatives within PENTAGON and visible to it.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default InspoLeader;
