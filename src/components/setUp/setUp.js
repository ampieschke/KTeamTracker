import React, { Component } from "react";

import { Container } from "react-bootstrap";

class SetUp extends Component {
  render() {
    return (
      <Container>
        <h1>Set Up</h1>
        <div className="phaseStep">
          <h3>1. Determine Mission</h3>
          <p>Pages 86-87 for basic play</p>
        </div>
        <div className="phaseStep">
          <h3>2. Determine Killzone</h3>
          <p>
            Either determined in the mission, or agreed on by the players (Pages
            76-80). Players should agree on terrain traits as they are placed.
          </p>
          <h3>3. Select Drop Zone</h3>
          <p>
            Players roll off and the winner decides who will be the attacker and
            who will be the defender. The defender then selects one of the drop
            zones for their operatives, and the attacker has the other.
          </p>
          <h3>4. Select A Kill Team</h3>
          <p>
            Each player determines their operatives for deployment by selecting
            one kill team from their army list. Once both players have selected
            their kill team, they should reveal it to their opponent. If a
            player's kill team includes a Leader operative, they add 2CP to
            their pool.
          </p>
          <h3>5. Set up Barricades</h3>
          <p>
            Players alternate setting up barricades, one at a time, starting
            with the defender, until each player has set up 2. Each time a
            player sets up a barricade, it must be within RED PENTAGON of their
            drop zone and not on a terrain feature (unless it has the
            insignificant trait).
          </p>
          <h3>6. Set up Operatives</h3>
          <p>
            The defender sets up all of their operatives first. Then the
            attacker sets up all of theirs. When a player sets up an operative,
            it must be wholly within their drop zone and given an Engage or
            Conceal order.
          </p>
          <h3>7. Begin the Battle</h3>
          <p>
            The first turning point of the battle begins. In the first
            Initiative phase, the attacker decides who has the initiative.
          </p>
        </div>
      </Container>
    );
  }
}
export default SetUp;
