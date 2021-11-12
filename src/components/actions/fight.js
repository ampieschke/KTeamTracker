import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Fight extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Fight</h1>
          <div className="action">
            <p>Select a visible enemy operative within engagement range</p>
            <p>
              Roll attack dice equal to the selected weapon attack
              characteristic. Dice that equal or beat the weapons Skill
              Characteristic are successful hits. Each that doesn’t is failed
              and discarded. A 6 is always a successful hit, and a 1 is always a
              failed hit. Keep track of each result of a 6 - this is a critical
              hit.
            </p>
            <p>
              Resolve successful hits - Starting with the attacker, each player
              alternates resolving one of their successful hits to Strike or
              Parry. They repeat this process until one operative in that combat
              is incapacitated or they have no more hits to resolve, in which
              case their opponent resolves all of their remaining hits.
            </p>
            <ul>
              <li>
                Parry - One of their opponents successful attack dice are
                discarded Normal hits discard normal hits Critical hits discard
                critical or normal hits
              </li>
              <li>
                Strike - Inflict Damage on the target Normal hits inflict normal
                weapon damage Critical hits in
              </li>
              <li>
                Combat Support Rule - For each friendly operative also in
                engagement range of the enemy operative, but not other enemies,
                improve the weapon skill by 1 (stackable).
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}
export default Fight;
