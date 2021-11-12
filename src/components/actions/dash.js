import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Dash extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Dash</h1>
          <div className="action">
            <p>
              Same rules as a Normal Move action but can only move a Blue Square
            </p>
            <p>
              Cannot perform this action if the operative is within in
              Engagement Range of an enemy operative, or has performed a Charge
              action
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Dash;
