import React, { Component } from "react";
import OppCard from "../armyList/card";
import OppListJson from "../tests/oppListJson";
// import Wrapper from "../Wrapper/index";
import tau from "../tau/tauRoster/tau.json";

class TauCards extends Component {
  state = {
    tau,
  };

  render() {
    return (
      <div>
        {this.state.tau.map((tau) => (
          <OppCard
            id={tau.id}
            key={tau.id}
            name={tau.name}
            m={tau.m}
            apl={tau.apl}
            w={tau.w}
          />
        ))}
        {this.state.tau.map((tau) => (
          <OppListJson id={tau.id} key={tau.id} name={tau.name} />
        ))}
      </div>
    );
  }
}

export default TauCards;
