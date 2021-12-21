import React, { Component } from "react";

import { Container } from "react-bootstrap";

class SetUp extends Component {
  render() {
    return (
      <Container>
        <h1>Set Up</h1>
        <div className="phaseStep">
          <h3>1. Determine Mission</h3>
          <p>Pages 119 - 137</p>
          <h3>2. Read Mission Briefing</h3>
          <h3>3. Determine Killzone</h3>
          <h3>4. Set Up Objective Markers</h3>
          <h3>5. Set Up the Kill Zone</h3>
          <p>
            See pages 76-80 fir terrain guidelines, or follow the configuration
            specified by the mission. Agree on terrain traits as they are
            placed.
          </p>
          <h3>6. Select Drop Zone</h3>
          <p>
            Players roll off and the winner decides who will be the attacker and
            who will be the defender. The defender then selects one of the
            dropzones for their operatives and the attacker takes the other.
          </p>
          <h3>7. Select a Kill Team</h3>
          <p>
            Players construct their kill teams according to their armies rules.
            Once both players kill teams have been selected, reveal them to one
            another. If your team includes a leader operative, add 2CP to your
            pool.
          </p>
          <h3>8. Select Tac Ops</h3>
          <p>
            Each player secretly builds a 6-card Tac Ops deck. Up to 3 of their
            cards can be their faction's Tac Ops as specified in their faction's
            army list. The remaining Tac Ops in their deck must be from their
            kill team's archetype, the player must select one oftheir archetypes
            to use.
          </p>
          <p>
            Each player shuffles their 6-card deck, then determines which Tac
            Ops they have for the battle in secret. To do so, draw two cards
            from your deck, selectone and discard the other. Repeat this process
            until 3 Tac Ops cards have been selected.
          </p>
          <h3>9. Select Equipment</h3>
          <p>
            Each player selects up to 10 points worth of equipment from their
            factionarmy list to equip operatives with for the battle. Once both
            teams have selected all their equipment, reveal it to your
            oppontent.
          </p>
          <h3>10. Set up Barricades</h3>
          <p>
            Take turns setting up barricades one at a time, starting with the
            defender, until the players have set up 2 barricades each.
            Barricades must be within PENTAGON of your drop zone and not on a
            terrain feature (unless it has the insignificant trait).
          </p>
          <h3>11. Set up Operatives</h3>
          <p>
            The defender sets up all of their operatives first. Then the
            attacker sets up all of theirs. When a player sets up an operative,
            it must be wholly within their drop zone and given an Engage or
            Conceal order.
          </p>
          <h3>12. Scouting</h3>
          <p>
            Each player selects a pregame scouting option. Once both players
            have made a selection, reveal them simultaneously. Then resolve
            selections starting with the Defender.
          </p>
          <ol>
            <li>Fortify - set up one additional barricade</li>
            <li>
              Infiltrate - Once during the first turning point, when you select
              a ready operative to activate, you can change its order.
            </li>
            <li>
              Recon - Perform a free Dash action with one friendly operative
              that is wholly within your drop zone.
            </li>
          </ol>
          <p>Selections decide initiative as follows</p>
          <ul>
            <li>Fortify beats Infiltrate</li>
            <li>Infiltrate beats Recon</li>
            <li>Recon beats Fortify</li>
            <li>
              If players select the same scouting option, the Attacker decides
              who has initiative.
            </li>
          </ul>
          <h3>13. Begin the Battle</h3>
          <h3>14. End the Battle and Determine the Winner</h3>
          <ul>
            <li>
              Each player can score a maximum of 12 points from the mission
              objective
            </li>
            <li>
              Each player can score a maximum of 2 points from each Tac Op (6
              victory points in total)
            </li>
            <li>
              If every operative on a players roster was painted to a battle
              ready standard, that player scores 2 points.
            </li>
            <li>
              In total a player can score a maximum of 20 victory points in a
              game.
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
export default SetUp;
