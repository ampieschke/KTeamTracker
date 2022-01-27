import React, { Component } from "react";

import { Container } from "react-bootstrap";

class ControlTheKZone extends Component {
  render() {
    return (
      <Container>
        <h1>Scenarios</h1>
        <div className="scenario">
          <h2>Control the Kill Zone (pg. 86 corebook)</h2>
          <h4>Mission Rules</h4>
          <p>
            <b>Objective Markers:</b> After setting up the gameboard but before
            setting up terrain features, the players roll off. Starting with the
            winner, the players alternate setting up objective markers until
            there are four on the battlefield.
            <ul>
              <li>
                The first objective marker each player sets up must be on the
                horizontal line equidistant from both players' drop zone, more
                than BLUE SQUARE from the edge of the killzone and more than RED
                PENTAGON from any other objective marker.
              </li>
              <li>
                The second objective marker each player sets up must be more
                than BLACK TRIANGLE from each player's drop zone, more than BLUE
                SQUARE from the edge of the killzone and more than RED PENTAGON
                from any other objective marker.
              </li>
            </ul>
          </p>
          <h4>Secure (1AP)</h4>
          <p>
            An operative can perform this action while within WHITE CIRCLE of an
            objective marker it controls that has not been secured during this
            Turning Point. Until the start of the next Turning Point, that
            objective marker is secured.
          </p>
          <h4>Mission Objective</h4>
          <p>
            Each time an operative performs the Secure action, you score 1VP.
          </p>
        </div>
      </Container>
    );
  }
}
export default ControlTheKZone;
