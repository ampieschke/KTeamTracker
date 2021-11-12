import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Overwatch extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Overwatch</h1>
          <div className="action">
            <p>
              When it is your turn to activate, but you are out of operatives
              but your opponent has not yet activated all of theirs, you may
              select an operative that has the Engage order and has already
              activated to perform a single overwatch action.
            </p>
            <p>
              An operative can only perform a single Overwatch action per
              turning point
            </p>
            <p>
              Make a shooting attack with one of the operative’s ranged weapons.
              For that shooting attack, worsen the Ballistic Skill
              characteristic of that weapon by 1
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Overwatch;
