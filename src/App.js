import { Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Auth0ProviderWithHistory from "./auth0Provider";
import LoginButton from "./components/loginButton/loginButton";
import GameFlow from "./pages/gameFlow";
import PrivateRoute from "./components/privateRoute";
import Scoreboard from "./components/scoreboard/scoreboard";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Container>
          <LoginButton />
        </Container>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={GameFlow} />
            <PrivateRoute exact path="/tacotown" component={Scoreboard} />
          </Switch>
        </BrowserRouter>
        {/* <Scoreboard />
        <PhaseInfo /> */}
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
