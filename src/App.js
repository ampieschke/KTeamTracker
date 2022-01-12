// import { Container } from "react-bootstrap";
import React from "react";
import "./App.css";
import Auth0ProviderWithHistory from "./auth0Provider";
import LoginButton from "./components/loginButton/loginButton";
import GameFlow from "./pages/gameFlow";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/footer";
// import ArmyRosters from "./pages/armyRosters";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <LoginButton />
        <GameFlow />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameFlow />} />
            <Route path="/armylist" element={<ArmyRosters />} />
          </Routes>
        </BrowserRouter> */}
        {/* <Footer /> */}
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
