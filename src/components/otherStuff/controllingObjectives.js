import React, { Component } from "react";

import { Container } from "react-bootstrap";

class ControllingObjectives extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Controlling Objectives</h1>
          <div className="phaseStep">
            <h3>1. Static Objective Holding</h3>
            <p>
              You controll an objective if the total APL of friendly units
              within WHITE CIRCLE of the center of the objective marker is
              greater than the enemy APL total.
            </p>
            <h3>2. Picked Up Objectives</h3>
            <p>
              If an object is being carried, the carrying operative is always in
              control of it.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default ControllingObjectives;
