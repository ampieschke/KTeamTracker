import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class ArtificialIntel extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Artificial Intelligence</Col>
        <Col>
          <ul>
            <li>
              This operative cannot perform mission actions or the{" "}
              <b>Pick Up</b> action.
            </li>
            <li>
              For the purpose of determining control of objective markers,treat
              this operative's APL as 1 lower.
            </li>
            <li>
              Each time a shooting attack is made against this operative, in the
              Roll Defence Dice step of that shooting attack, if it has an
              Engage order, defence dice cannot be automatically retained as a
              result of Cover
            </li>
            <li>
              Whendrawing aVisibility linefroma DRONE operative, draw it from
              any part of the round disc at the top of the miniature.
            </li>
            <li>
              Unless otherwise specified, this operative cannot be equiped with
              equipment.
            </li>
          </ul>
        </Col>
      </Container>
    );
  }
}
export default ArtificialIntel;
