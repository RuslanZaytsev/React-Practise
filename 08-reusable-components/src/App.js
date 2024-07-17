import "./App.css";
import { Divider } from "./Components/Divider/Divider";
import { MyComponent } from "./Components/MyComponent/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Divider />
      <MyComponent />
      <Divider />
      <MyComponent />
    </div>
  );
}

export default App;
