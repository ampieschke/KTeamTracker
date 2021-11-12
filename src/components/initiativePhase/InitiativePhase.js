import React, { Component } from "react";

import { Container } from "react-bootstrap";

class InitiativePhase extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Initiative Phase</h1>
          <h3>Ready Operatives</h3>
          <p>
            Each player readies all friendly operatives by flipping their order
            token
          </p>
        </Container>
      </div>
    );
  }
}
export default InitiativePhase;
