import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import ArmyList from "../components/armyList/armyList";

function ArmyRosters() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ArmyList />
    </div>
  );
}

export default withAuthenticationRequired(ArmyRosters);
