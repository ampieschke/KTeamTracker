import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ControlTheKZone from "./scenarios/controlTheKZone";

class ScenarioSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTeam: "" };
    this.teamUpdate = this.teamUpdate.bind(this);
  }

  teamUpdate(e) {
    this.setState({ activeTeam: e.target.value });
    var scenarioAreaEl = document.querySelector("#scenarioArea");
    scenarioAreaEl.classList.remove("hiden");
  }

  render() {
    console.log(this.state.activeTeam);
    let scenario;
    if (this.state.activeTeam === "ctkz") {
      scenario = <ControlTheKZone />;
    }
    // else if (this.state.activeTeam === "greyKnights") {
    //   army = <GreyKnightSelector />;
    // } else if (this.state.activeTeam === "vGuardsmen") {
    //   army = <VeteranGuardsmen />;
    // }
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="3">
              <div>
                <button
                  className="button-53"
                  onClick={this.teamUpdate}
                  value="ctkz"
                  id="ctkz"
                >
                  Control the Killzone
                </button>
              </div>
            </Col>
          </Row>
          <Row id="scenarioArea">{scenario}</Row>
        </Container>
      </div>
    );
  }
}
export default ScenarioSelector;
