import logo from "./logo.svg";
import "./App.css";
import Aboutme from "./Aboutme";
import MyTown from "./MyTown";

function App() {
  return (
    <div className="App">
      <a className="App-link">
        <h2>About me</h2>
      </a>
      <a className="App-link">
        <h2>My Town</h2>
      </a>

      <MyTown name="Shreerag Marar"></MyTown>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
