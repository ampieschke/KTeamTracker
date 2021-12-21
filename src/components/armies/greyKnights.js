import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import GreyKnightWar from "../greyKnights/greyKnightRoster/greyKnightWarrior";
import GreyKnightGunner from "../greyKnights/greyKnightRoster/greyKnightGunner";
import GreyKnightJusticar from "../greyKnights/greyKnightRoster/greyKnightJusticar";

class GreyKnights extends Component {
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
    if (this.state.activeOperative === "greyKnightWar") {
      rosterArea = <GreyKnightWar />;
    } else if (this.state.activeOperative === "greyKnightGunner") {
      rosterArea = <GreyKnightGunner />;
    } else if (this.state.activeOperative === "greyKnightJusticar") {
      rosterArea = <GreyKnightJusticar />;
    }

    return (
      <Container>
        <div>
          <h3>Roster</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="greyKnightJusticar"
                id="greyKnightJusticar"
              >
                Grey Knight Justicar
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="greyKnightWar"
                id="greyKnightWar"
              >
                Grey Knight Warrior
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="greyKnightGunner"
                id="greyKnightGunner"
              >
                Grey Knight Gunner
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

export default GreyKnights;
