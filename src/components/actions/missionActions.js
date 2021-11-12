import React, { Component } from "react";

import { Container } from "react-bootstrap";

class MissionActions extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Mission Actions</h1>
          <div className="action">
            <p>Specific to a mission and outlined in the briefing</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default MissionActions;
