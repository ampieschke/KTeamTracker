import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { Component } from "react";
import Scoreboard from "../components/scoreboard/scoreboard";
import PhaseInfo from "../components/phaseInfo/phaseInfo";
import ArmyList from "../components/armyList/armyList";
import { Container, Row, Col } from "react-bootstrap";

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
        <Scoreboard />
        <Container> {mainDisplay}</Container>

        {/* <ArmyList />
          <PhaseInfo /> */}
        <Container className="bottomPart">
          <Row>
            <Col xs="4" className="footicon">
              <button
                onClick={this.displayUpdate}
                className=""
                value="phases"
                id="phases"
              >
                {/* <i
                  className="fas fa-book-open fa-2x"
                  // style={{ color: "white" }}
                ></i> */}
                General Rules
              </button>
            </Col>
            <Col xs="4" className="footicon">
              <button
                onClick={this.displayUpdate}
                className=""
                value="armylist"
                id="armylist"
              >
                {/* <i
                  className="fas fa-book-open fa-2x"
                  style={{ color: "white" }}
                ></i> */}
                Army Lists
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuthenticationRequired(GameFlow);
