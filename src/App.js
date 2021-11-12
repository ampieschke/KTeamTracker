import "./App.css";
import TurnCounter from "./components/turnCounter/turnCounter";
import PhaseInfo from "./components/phaseInfo/phaseInfo";

function App() {
  return (
    <div className="App">
      <TurnCounter />
      <PhaseInfo />
    </div>
  );
}

export default App;
