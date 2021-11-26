import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import NoCover from "../../specialRules/noCover";

class MarkerLight extends Component {
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
      srArea = <NoCover />;
    }
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Markerlight (1AP)</Col>
          <Col xs="9">
            <p>
              Select one enemy operative Visable to this operative. That enemy
              operative gains 1 Markerlight Taken. An operative cannot perform
              this action if it is within Engagement Range of an enemy
              operative. If an operative would perform this action and a SHOOT
              action in the same activation, only the target of that SHOOT
              actions shooting attack can be selected for this action.
            </p>
            <p>
              Operatives gain Markerlight tokens as explained above. In the
              ready operatives step of the Initiative Phase, remove one
              Markerlight Token that each operative has.
            </p>
            <p>
              Each time an operative makes a shooting attack it gains a number
              of cumulative benefits for that shooting attack depending on how
              many Markerlight tokens the target operative has. Operatives gain
              no markerlight benefits for shooting attacks made with EMP and
              Fusion grenades
            </p>
            <ol>
              <li>
                1+ In the roll attack dice step of that shooting attack, you can
                reroll one of your attack dice
              </li>
              <li>
                2+ For that shooting attack, the active operative's ranged
                weapons gain the{" "}
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="balanced"
                >
                  No Cover
                </button>{" "}
                special rule
              </li>
              <li>
                3+ For that shooting attack, improve the BS characteristic by 1
              </li>
              <li>
                4+ In the select valid target step of that shooting attack, the
                enemy operative is not Obscured
              </li>
              <li>
                5+ In the select valid target step of that shooting attack, the
                enemy operative is treated as if it has the Engage order
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default MarkerLight;
