import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Indirect from "../../specialRules/indirect";
import Limited from "../../specialRules/limited";

class PhotonNade extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSR: "" };
    this.srUpdate = this.srUpdate.bind(this);
  }

  srUpdate(e) {
    this.setState({ activeSR: e.target.value });
    console.log(this.state.activeSR);
  }

  render() {
    let srArea;
    if (this.state.activeSR === "limited") {
      srArea = <Limited />;
    } else if (this.state.activeSR === "indirect") {
      srArea = <Indirect />;
    }

    return (
      <Container>
        <Row>
          <Col className="weapon">Photon Grenade</Col>
          <Row>
            <p>
              Select a visible target and roll a D6 - subtracting 1 from the
              result as follows:
            </p>
            <ul>
              <li>
                If that enemy operative is not in the operatives Line of Sight
              </li>
              <li>
                If that enemy operative is more than PENTAGON from this
                operative
              </li>
            </ul>
            <p>
              On a 2+ that enemy operative gains a Photon token. While an
              operative has any Photon tokens, subtract CIRCLE from its Movement
              characteristic and it cannot perform DASH actions. At the end of
              an operative's activation, remove all photon tokens it has. This
              operative can only perform this action once and cannot perform
              this action if it is within Engagement Range of an enemy
              operative.
            </p>
          </Row>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default PhotonNade;
