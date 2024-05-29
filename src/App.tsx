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
        <label htmlFor="api-key">API Key: </label>
        <input type="text" ref={apiKeyRef} name="api-key" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
