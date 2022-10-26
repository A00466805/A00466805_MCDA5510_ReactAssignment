import logo from "./logo.svg";
import "./App.css";
import Aboutme from "./Aboutme";
import MyTown from "./MyTown";
import React, { useState } from "react";

function App() {
  const [showTown, showMyTown] = useState(false);

  return (
    <div className="App">
      <button className="App-link" onClick={(e) => showMyTown(false)}>
        <h2>About me</h2>
      </button>
      <button className="App-link" onClick={(e) => showMyTown(true)}>
        <h2>My Town</h2>
      </button>
      {showTown === true ? (
        <MyTown name="Shreerag Marar"></MyTown>
      ) : (
        <Aboutme></Aboutme>
      )}
    </div>
  );
}

export default App;
