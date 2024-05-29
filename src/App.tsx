import React, { useRef } from "react";
import "./App.css";

function App() {
  const apiKeyRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!apiKeyRef) return;

    const apiKey = apiKeyRef.current!.value;

    localStorage.setItem("PTApiKey", apiKey);
  }

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <form onSubmit={handleSubmit}>
        <p>Enter API Key: </p>
        <input type="text" ref={apiKeyRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
