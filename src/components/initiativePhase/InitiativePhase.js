import React, { Component } from "react";

import { Container } from "react-bootstrap";

class InitiativePhase extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Initiative Phase</h1>
          <div className="phaseStep">
            <h3>1. Ready Operatives</h3>
            <p>
              Each player readies all friendly operatives by flipping their
              order token
            </p>
          </div>
          <div className="phaseStep">
            <h3>2. Determine Initiative</h3>
            <p>
              On the first turn the initiative is determined in the mission
              sequence (page 81) In subsequent turns roll off to determine who
              has initiative. In case of a tie the player who did not have
              initiative last turning point has initiative
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default InitiativePhase;
