import React, { Component } from "react";

import { Container } from "react-bootstrap";

class StrategyPhase extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Strategy Phase</h1>
          <div className="phaseStep">
            <h3>1. Generate Command Points</h3>
            <p>
              Each player generates 1 Command Point (CP) and adds it to their CP
              pool (CPs remain in the pool until spent).
            </p>
            <p>
              CPs can be spent on Tactical Ploys (Found in the faction army
              list) Tactical Ploys are minor benefits and can each be used once
              per turn (exception of Command Re-Roll which is always available)
              Tactical Ploys will specify when to be used
            </p>
          </div>
          <div className="phaseStep">
            <h3>2. Play Strategic Ploys</h3>
            <p>
              Starting with the player who has initiative, players alternate
              using a Strategic Ploy or choosing to pass, until both players
              have passed in succession.
            </p>
            <p>
              To play a Strategic Ploy - remove the specified CPs from the pool
              When used - resolve its effects immediately. You cannot use a
              Strategic Ploy more than once per Strategic Phase
            </p>
          </div>
          <div className="phaseStep">
            <h3>3. Target Reveal</h3>
            <p>
              Beginning with the player who has initiative, players alternate
              revealing Tac Ops or choosing to pass. Repeat this until both
              players have passed in succession.
            </p>
            <p>
              Tac Ops are secondary objectives that if achieved will earn
              victory points.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default StrategyPhase;
