import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Shoot extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Shoot</h1>
          <div className="action">
            <p>
              Cannot take this action with a concealed order or within
              Engagement Range of an enemy operative
            </p>
            <p>Follow these steps to shoot:</p>
            <ol>
              <li>
                Select one ranged weapon the operative is equipped with and
                collect attack dice equal to the weapon’s attack characteristic.
              </li>
              <li>
                Select an enemy operative in line of sight, with no friendly
                operatives within Engagement Range.
              </li>
              <li>
                Roll attack dice - Each result that equals or beats the weapons
                Ballistic SKill characteristic is a hit and is retained. Each
                that doesn’t is failed and discarded. A 6 is always a successful
                hit, and a 1 is always a failed hit. Keep track of each result
                of a 6 - this is a critical hit.
              </li>
              <li>
                Roll Defence Dice - The defending operative rolls dice equal to
                their Defence characteristic (DC) Each result that is equal to
                or beats its Save characteristic is a successful save. Each that
                doesn’t is a failed save and is discarded. A 6 is always a
                successful save, and a 1 is always a failed save. Keep track of
                each result of a 6 - this is a critical save (Some weapons have
                Special Rules that affect dice during an attack. APx subtract x
                from defence rolls).
              </li>
              <li>
                Resolve Successful Saves - The defender uses their retained
                defence dice to discard successful hits. To resolve a normal
                hit, discard a normal save or critical save. To resolve a
                critical hit discard a critical save, discard 2 normal saves, or
                a critical save.
              </li>
              <li>
                Resolve Successful Hits - Resolve any remaining hits. If the
                attack dice is a normal hit, inflict the weapons Normal Damage
                If the attack dice is a critical hit, inflict the weapons
                Critical Damage
              </li>
              <li>
                Remove Incapacitated Operatives - If an operative's wounds are
                reduced to 0 remove the operative from the killzone.
              </li>
            </ol>
          </div>
        </Container>
      </div>
    );
  }
}
export default Shoot;
