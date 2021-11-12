import "./App.css";
// import TurnCounter from "./components/turnCounter/turnCounter";
import PhaseInfo from "./components/phaseInfo/phaseInfo";
import Scoreboard from "./components/scoreboard/scoreboard";

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <PhaseInfo />
    </div>
  );
}

export default App;
