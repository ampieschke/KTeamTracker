import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ArtofWar extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Art of War</Col>
        <Col>
          <p>
            Once per battle, when it is your turn to use a Strategic Ploy, if
            this operative is in the Killzone, it can use this ability. If it
            does, select one Art of War to be in effect until the end of the
            Turning Point.
          </p>
          <ul>
            <li>
              Mont'Ka - Each time a friendly Pathfinder operative is activated,
              if it has an Engage order for that activation, it can perform a
              free DASH action during that activation{" "}
            </li>
            <li>
              Kauyon - Each time a shooting attack is made against a friendly
              Pathfinder operative, before rolling your defence dice, if it is
              in Cover, one additional dice can be retained as a sucessful
              normal save as a result of cover{" "}
            </li>
          </ul>
        </Col>
      </Container>
    );
  }
}
export default ArtofWar;
