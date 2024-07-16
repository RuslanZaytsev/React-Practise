import logo from "./logo.svg";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  const entries = reportWebVitals(console.log);
  console.log(
    "%c DEBUG ---------->  ",
    "color: white; background-color: blue",
    { entries }
    /* метрика производительность рендера */
  );
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="тут должен отрисоваться логотип реакт"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
