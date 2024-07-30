import "./App.css";
import { animals } from "./components/const";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo pet={animals[0]} age={"5"} hasPet />
      <PetInfo pet={animals[1]} age={3} hasPet />
      <PetInfo pet={animals[2]} age={"forty four"} hasPet={false} />
    </div>
  );
}

export default App;
