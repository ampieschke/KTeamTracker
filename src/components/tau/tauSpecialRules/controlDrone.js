import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ArtificialIntel from "./artificialIntel";

class ControlDrone extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSR: "" };
    this.srUpdate = this.srUpdate.bind(this);
  }

  srUpdate(e) {
    this.setState({ activeSR: e.target.value });
  }

  render() {
    let srArea;
    if (this.state.activeSR === "balanced") {
      srArea = <ArtificialIntel />;
    }

    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Control Drone</Col>
          <Col xs="9">
            <p>
              Select one friendly Pathfinder Drone operative, then select one of
              the following (cannot be performed if within engagement range of
              an enemy):
            </p>
            <ul>
              <li>
                If that Drone operative is Ready, after this activation ends,
                you can activate that Drone operative and until the end of the
                Turning Point, it is not considered to have the first 3 bullet
                points of its{" "}
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="balanced"
                >
                  Artificial Intelligence
                </button>{" "}
                ability.
              </li>
              <li>
                If that Drone operative has been activated during this Turning
                Point, perform a free DASH or SHOOT action with it. If you
                perform a Shoot action, for that action's shooting attack worsen
                the Balistic Skill characteristic of it's ranged weapons by 1.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default ControlDrone;
