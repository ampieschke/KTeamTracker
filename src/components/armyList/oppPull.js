import React, { Component } from "react";

import { Container, Card } from "react-bootstrap";
import OppCard from "./oppCard";
import DGs from "../deathGuard/dgroster.json";

class OppPull extends Component {
  state = {
    DGs,
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            {this.state.DGs.map((dg) => (
              <OppCard
                id={dg.id}
                key={dg.id}
                operative={dg.operative}
                m={dg.m}
              />
            ))}
          </Card>
        </Container>
      </div>
    );
  }
}
export default OppPull;
