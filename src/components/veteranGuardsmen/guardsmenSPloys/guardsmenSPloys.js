import React, { Component } from "react";
// import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import OverchargeLasguns from "./overchargeLasguns";
import TakeCover from "./takeCover";
import IntoTheBreach from "./intoTheBreach";
import ClearTheLine from "./clearTheLine";

class GuardsmenSPloys extends Component {
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
    if (this.state.activeOperative === "overchargeLasguns") {
      rosterArea = <OverchargeLasguns />;
    } else if (this.state.activeOperative === "takeCover") {
      rosterArea = <TakeCover />;
    } else if (this.state.activeOperative === "intoTheBreach") {
      rosterArea = <IntoTheBreach />;
    } else if (this.state.activeOperative === "clearTheLine") {
      rosterArea = <ClearTheLine />;
    }

    return (
      <Container>
        <div>
          <h3>Strategic Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="overchargeLasguns"
                id="overchargeLasguns"
              >
                Overcharge Lasguns
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="takeCover"
                id="takeCover"
              >
                Take Cover
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="intoTheBreach"
                id="intoTheBreach"
              >
                Into the Breach
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="clearTheLine"
                id="clearTheLine"
              >
                Clear the Line
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

export default GuardsmenSPloys;
