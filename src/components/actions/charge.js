import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Charge extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Charge</h1>
          <div className="action">
            <p>
              Cannot perform this action if the operative already performed a
              normal Move or Charge action
            </p>
            <p>Operative moves the same as a normal move, with exceptions</p>
            <p>
              A Charge move must be finished within Engagement Range of an enemy
              operative
            </p>
            <p>
              If during the move, the operative moves within Engagement Range of
              an enemy operative and no other friendly operative is already
              within Engagement Range of that enemy, the move must be finished
              within Engagement Range of that enemy operative.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Charge;
