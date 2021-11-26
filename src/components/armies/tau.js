import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import ShasUi from "../tau/tau/shasUi";

class Tau extends Component {
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
    if (this.state.activeOperative === "shasUi") {
      rosterArea = <ShasUi />;
    }

    return (
      <Container>
        <h1>Tau</h1>
        <div>
          <h3>Roster</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 operativeBtn"
                value="shasUi"
                id="shasUi"
              >
                Shas'ui Pathfinder
              </button>
            </Col>
            <Col lg="9" className="rightBox">
              {rosterArea}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Tau;
