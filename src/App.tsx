import React, { useState } from "react";
import "./App.css";

function App() {
  const [apiKey, setApiKey] = useState("");

  function handleAPIChange(evt: React.FormEvent<HTMLInputElement>) {
    evt.preventDefault();
    setApiKey(evt.currentTarget.value);
  }

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <p>Enter API Key: </p>
      <form>
        <input type="text" value={apiKey} onChange={handleAPIChange} />
      </form>
    </div>
  );
}

export default App;
