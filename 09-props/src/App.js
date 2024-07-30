import "./App.css";
import { animals } from "./components/const";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo pet={animals[0]} years={"5"} />
      <PetInfo pet={animals[1]} years={3} />
      <PetInfo pet={animals[2]} years={"forty four"} />
    </div>
  );
}

export default App;
