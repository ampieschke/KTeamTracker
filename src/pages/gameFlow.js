import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Scoreboard from "../components/scoreboard/scoreboard";
import PhaseInfo from "../components/phaseInfo/phaseInfo";
import ArmyList from "../components/armyList/armyList";

function GameFlow() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Scoreboard />
      <ArmyList />
      <PhaseInfo />
    </div>
  );
}

export default withAuthenticationRequired(GameFlow);
