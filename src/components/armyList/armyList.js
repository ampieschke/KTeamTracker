import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Tau from "../armies/tau";
import GreyKnights from "../armies/greyKnights";

class ArmyList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTeam: "" };
    this.teamUpdate = this.teamUpdate.bind(this);
  }

  teamUpdate(e) {
    this.setState({ activeTeam: e.target.value });
    var closeBtnEl = document.querySelector("#closeBtn");
    var armyAreaEl = document.querySelector("#armyArea");
    closeBtnEl.classList.remove("hiden");
    armyAreaEl.classList.remove("hiden");
  }

  closeTeam(e) {
    var closeBtnEl = document.querySelector("#closeBtn");
    var armyAreaEl = document.querySelector("#armyArea");
    closeBtnEl.classList.add("hiden");
    armyAreaEl.classList.add("hiden");
  }

  render() {
    console.log(this.state.activeTeam);
    let army;
    if (this.state.activeTeam === "tau") {
      army = <Tau />;
    } else if (this.state.activeTeam === "greyKnights") {
      army = <GreyKnights />;
    } else if (this.state.activeTeam === "none") {
      army = "";
    }
    return (
      <div>
        <Container>
          <Row>
            <Col lg="6">
              <div>
                <button
                  className="btn"
                  onClick={this.teamUpdate}
                  value="tau"
                  id="tau"
                >
                  Tau
                </button>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <button
                  className="btn"
                  onClick={this.teamUpdate}
                  value="greyKnights"
                  id="greyKnights"
                >
                  Grey Knights
                </button>
              </div>
            </Col>
          </Row>
          <Row id="armyArea">{army}</Row>
        </Container>
        <div className="d-grip gap-2">
          <Button
            variant="secondary"
            size="lg"
            id="closeBtn"
            className="hiden"
            onClick={this.closeTeam}
            value=""
          >
            Close
          </Button>
        </div>
      </div>
    );
  }
}

export default ArmyList;
