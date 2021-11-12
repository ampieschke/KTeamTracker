import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Charge from "../actions/charge";
import Dash from "../actions/dash";
import FallBack from "../actions/fallBack";
import Fight from "../actions/fight";
import Flying from "../actions/flying";
import MissionActions from "../actions/missionActions";
import NormalMove from "../actions/normalMove";
import Overwatch from "../actions/overwatch";
import Pass from "../actions/pass";
import PickUp from "../actions/pickUp";
import Shoot from "../actions/shoot";
import UniqueActions from "../actions/uniqueActions";

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
    } else if (this.state.activeAction === "flying") {
      actionArea = <Flying />;
    } else if (this.state.activeAction === "charge") {
      actionArea = <Charge />;
    } else if (this.state.activeAction === "fallBack") {
      actionArea = <FallBack />;
    } else if (this.state.activeAction === "dash") {
      actionArea = <Dash />;
    } else if (this.state.activeAction === "pickUp") {
      actionArea = <PickUp />;
    } else if (this.state.activeAction === "shoot") {
      actionArea = <Shoot />;
    } else if (this.state.activeAction === "fight") {
      actionArea = <Fight />;
    } else if (this.state.activeAction === "overwatch") {
      actionArea = <Overwatch />;
    } else if (this.state.activeAction === "pass") {
      actionArea = <Pass />;
    } else if (this.state.activeAction === "uniqueActions") {
      actionArea = <UniqueActions />;
    } else if (this.state.activeAction === "missionActions") {
      actionArea = <MissionActions />;
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
              <Col lg="3" className="leftBox">
                <button
                  onClick={this.actionUpdate}
                  className="button-54 actionBtn "
                  value="normalMove"
                  id="normalMove"
                >
                  1. Normal Move
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="flying"
                  id="flying"
                >
                  2. Flying
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="charge"
                  id="charge"
                >
                  3. Charge
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="fallBack"
                  id="fallBack"
                >
                  4. Fall Back
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="dash"
                  id="dash"
                >
                  5. Dash
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="pickUp"
                  id="pickUp"
                >
                  6. Pick Up
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="shoot"
                  id="shoot"
                >
                  7. Shoot
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="fight"
                  id="fight"
                >
                  8. Fight
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="overwatch"
                  id="overwatch"
                >
                  9. Overwatch
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="pass"
                  id="pass"
                >
                  10. Pass
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="uniqueActions"
                  id="uniqueActions"
                >
                  11. Unique Actions
                </button>
                <button
                  onClick={this.actionUpdate}
                  className="actionBtn button-54"
                  value="missionActions"
                  id="missionActions"
                >
                  12. Mission Actions
                </button>
              </Col>
              <Col lg="9" className="rightBox">
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
