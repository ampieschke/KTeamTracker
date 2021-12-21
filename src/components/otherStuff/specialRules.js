import React, { Component } from "react";

import { Container, Accordion } from "react-bootstrap";
import SRAccordian from "../specialRules/accordianForSRs";
import rules from "../../specialRules.json";

class FireFightPhase extends Component {
  state = {
    rules,
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Special Rules</h1>
          <div className="rules">
            <Accordion>
              {this.state.rules.map((rule) => (
                <SRAccordian
                  id={rule.id}
                  key={rule.id}
                  name={rule.name}
                  explination={rule.explination}
                />
              ))}
            </Accordion>
          </div>
        </Container>
      </div>
    );
  }
}
export default FireFightPhase;
