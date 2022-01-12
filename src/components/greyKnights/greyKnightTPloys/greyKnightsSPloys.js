import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AndTheyShall from "./andTheyShall";
import OnlyInDeath from "./onlyInDeath";

class GreyKnightsTPloys extends Component {
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
    if (this.state.activeOperative === "andTheyShall") {
      rosterArea = <AndTheyShall />;
    } else if (this.state.activeOperative === "onlyInDeath") {
      rosterArea = <OnlyInDeath />;
    }

    return (
      <Container>
        <div>
          <h3>Tactical Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="andTheyShall"
                id="andTheyShall"
              >
                And They Shall Know No Fear
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 gKButton"
                value="onlyInDeath"
                id="onlyInDeath"
              >
                Only in Death
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

export default GreyKnightsTPloys;
