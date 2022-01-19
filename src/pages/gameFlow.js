import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { Component } from "react";
import Scoreboard from "../components/scoreboard/scoreboard";
import PhaseInfo from "../components/phaseInfo/phaseInfo";
import ArmyList from "../components/armyList/armyList";
import { Row, Col, Button } from "react-bootstrap";
import Headline from "./kttrackerraw.png";

class GameFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDisplay: "phases" };
    this.displayUpdate = this.displayUpdate.bind(this);
  }

  displayUpdate(e) {
    this.setState({ currentDisplay: e.target.value });
    console.log(this.state.currentDisplay);
  }

  render() {
    let mainDisplay;
    if (this.state.currentDisplay === "phases") {
      mainDisplay = <PhaseInfo />;
    } else if (this.state.currentDisplay === "armylist") {
      mainDisplay = <ArmyList />;
    }
    return (
      <div>
        <img src={Headline} className="img-fluid" alt="Logo" />
        <Scoreboard />
        {mainDisplay}
        <div className="bottomPart text-center">
          <Row>
            <Col xs="4" className="footicon ">
              <Button
                onClick={this.displayUpdate}
                className="footBtn"
                value="phases"
                id="phases"
              >
                <Row>
                  <i className="fas fa-book-open fa-2x"></i>
                </Row>
                General Rules
              </Button>
            </Col>
            <Col xs="4" className="footicon">
              <Button
                onClick={this.displayUpdate}
                className="footBtn"
                value="armylist"
                id="armylist"
              >
                <Row>
                  <i className="fas fa-trophy fa-2x"></i>
                </Row>
                Army Lists
              </Button>
            </Col>
            <Col xs="4" className="footicon">
              <button
                onClick={this.displayUpdate}
                className="footBtn"
                value="/"
                id="/"
              >
                Scenario Generator
              </button>
            </Col>
            {/* <Col>
              <span
                onClick={this.displayUpdate}
                className=""
                value="phases"
                id="phases"
              >
                hi
                <i
                  className="fas fa-trophy fa-2x"
                  style={{ color: "white" }}
                ></i>
              </span>
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}

export default withAuthenticationRequired(GameFlow);
