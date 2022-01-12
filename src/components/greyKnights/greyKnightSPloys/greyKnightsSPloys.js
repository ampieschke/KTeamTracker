import React, { Component } from "react";
// import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import BolterDiscipline from "./bolterDiscipline";
import ShockAssault from "./shockAssault";
import TideOfCelerity from "./tideOfCelerity";
import TideOfShadows from "./tideOfShadows";
// import BolterDiscipline from "../bolterDiscipline";

class GreyKnightsSPloys extends Component {
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
    if (this.state.activeOperative === "bolterDiscipline") {
      rosterArea = <BolterDiscipline />;
    } else if (this.state.activeOperative === "shockAssault") {
      rosterArea = <ShockAssault />;
    } else if (this.state.activeOperative === "tideofCelerity") {
      rosterArea = <TideOfCelerity />;
    } else if (this.state.activeOperative === "tideofShadows") {
      rosterArea = <TideOfShadows />;
    }

    return (
      <Container>
        <div>
          <h3>Strategic Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="bolterDiscipline"
                id="bolterDiscipline"
              >
                Bolter Discipline
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="shockAssault"
                id="shockAssault"
              >
                Shock Assault
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="tideofCelerity"
                id="tideofCelerity"
              >
                Tide of Celerity
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="tideofShadows"
                id="tideofShadows"
              >
                Tide of Shadows
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

export default GreyKnightsSPloys;
