import { Container } from "react-bootstrap";
import React from "react";
import "./App.css";
import Auth0ProviderWithHistory from "./auth0Provider";
import LoginButton from "./components/loginButton/loginButton";
import GameFlow from "./pages/gameFlow";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Container>
          <LoginButton />
          <GameFlow />
        </Container>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
