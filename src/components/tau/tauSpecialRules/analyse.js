import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class Analyse extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Analyse (1AP)</Col>
        <Col>
          <p>
            Select one enemy operative visible to this operative, then select
            one readied friendly operative that is not within engagement range
            of an enemy. After this operatives activation ends, you can activate
            that other friendly operative, and during that activation, each time
            it makes a shooting action against that enemy operative you can
            reroll any or all shooting attack dice. This operative cannot
            perform this action if it's within engagement range of an enemy.
          </p>
        </Col>
      </Container>
    );
  }
}
export default Analyse;
