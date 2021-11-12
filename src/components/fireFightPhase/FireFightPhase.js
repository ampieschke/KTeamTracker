import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import NormalMove from "../actions/normalMove/normalMove";

class FireFightPhase extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAction: "" };
    this.actionUpdate = this.actionUpdate.bind(this);
  }

  actionUpdate(e) {
    this.setState({ activeAction: e.target.value });
  }

  render() {
    let actionArea;
    if (this.state.activeAction === "normalMove") {
      actionArea = <NormalMove />;
      // } else if (this.state.activePhase === "strategyPhase") {
      //   actionArea = <StrategyPhase />;
      // } else if (this.state.activePhase === "firefightPhase") {
      //   actionArea = <FireFightPhase />;
    }

    return (
      <div>
        <Container>
          <h1>Firefight Phase</h1>
          <div className="phaseStep">
            <h3>Perform Actions</h3>
            <p>
              The player who has initiative goes first selecting one ready
              friendly operative and activating it.
            </p>
            <p>
              Each time a readied operative is activated, determine if it has
              the Engage or Conceal order (placing the appropriate token)
            </p>
            <p>
              The operative then takes a number of actions equal to its Action
              Point Limit (APL). Once all their action points have been used and
              they have no further actions to perform, their activation ends.
            </p>
            <p>
              If an operative has a Group Activation (GA) of more than 1, it
              must be activated in a group rather than individually. Once the
              first operative is completed, move onto the next operative in the
              group before moving to the next player.
            </p>
            <p>
              Then the opposing player does the same until neither side has
              operatives left.
            </p>
          </div>
          <div className="phaseStep">
            <h3>Actions</h3>
            <Row>
              <Col lg="2" className="leftBox">
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="normalMove"
                  id="normalMove"
                >
                  1. Normal Move
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="flying"
                  id="flying"
                >
                  2. Flying
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="charge"
                  id="charge"
                >
                  3. Charge
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="fallBack"
                  id="fallBack"
                >
                  4. Fall Back
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="dash"
                  id="dash"
                >
                  5. Dash
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="pickUp"
                  id="pickUp"
                >
                  6. Pick Up
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="shoot"
                  id="shoot"
                >
                  7. Shoot
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="fight"
                  id="fight"
                >
                  8. Fight
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="overwatch"
                  id="overwatch"
                >
                  9. Overwatch
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="pass"
                  id="pass"
                >
                  10. Pass
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="uniqueActions"
                  id="uniqueActions"
                >
                  11. Unique Actions
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn"
                  value="missionActions"
                  id="missionActions"
                >
                  12. Mission Actions
                </button>
              </Col>
              <Col lg="10" className="rightBox">
                {actionArea}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default FireFightPhase;
