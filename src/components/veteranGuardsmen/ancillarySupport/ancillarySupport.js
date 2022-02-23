import React, { Component } from "react";
// import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import ArtilleryBarage from "../guardsmenArms/artilleryBarrage";
import MarkedAirStrike from "../guardsmenArms/markedAirStrike";
import GuidedMissile from "../guardsmenArms/guidedMissile";
import StraffingRun from "../guardsmenArms/straffingRun";

class AncillarySupport extends Component {
  constructor(props) {
    super(props);
    this.state = { activeOperative: "" };
    this.rosterUpdate = this.rosterUpdate.bind(this);
  }

  rosterUpdate(e) {
    this.setState({ activeOperative: e.target.value });
  }

  render() {
    let rosterArea;
    if (this.state.activeOperative === "artillery") {
      rosterArea = <ArtilleryBarage />;
    } else if (this.state.activeOperative === "airStrike") {
      rosterArea = <MarkedAirStrike />;
    } else if (this.state.activeOperative === "missile") {
      rosterArea = <GuidedMissile />;
    } else if (this.state.activeOperative === "strafing") {
      rosterArea = <StraffingRun />;
    }

    return (
      <Container>
        <div>
          <h3>Ancillary Support</h3>
          <p>
            Ancillary support are operatives and tactical assets that supplement
            the Veteran Guardsman Kill Team.
            <br />
            <br />
            1 option can be selected to be brought with your Kill Team, either 4
            additional Trooper Veterans, OR 2 Tactial Assets listed below.
            <br />
            <br />
          </p>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="artillery"
                id="artillery"
              >
                Artillery Barrage
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="airStrike"
                id="airStrike"
              >
                Marked Air Strike
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="missile"
                id="missile"
              >
                Guided Missile
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="strafing"
                id="strafing"
              >
                Strafing Run
              </button>
            </Col>
            <Col xs="9" className="rightBox">
              {rosterArea}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default AncillarySupport;
