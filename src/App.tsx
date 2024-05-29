import React, { useRef } from "react";
import "./App.css";

function App() {
  const apiKeyRef = useRef<HTMLInputElement>(null);

  function handleApiKeySubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!apiKeyRef) return;

    const apiKey = apiKeyRef.current!.value;

    localStorage.setItem("PTApiKey", apiKey);
  }

  function handleAssetSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const form = new FormData(evt.currentTarget);
    const name = form.get("name") as string;
    const amount = parseFloat(form.get("amount") as string);
    const boughtFor = parseFloat(form.get("bought-for") as string);

    if (!name || !amount || !boughtFor) return;

    addAsset(name, amount, boughtFor);
    evt.currentTarget.reset();
  }

  function addAsset(name: string, amount: number, boughtFor: number) {
    let assets: { [key: string]: object } = {};

    if (localStorage.getItem("assets")) {
      assets = JSON.parse(localStorage.getItem("assets")!);
    }

    assets[name] = {
      amount: amount,
      boughtFor: boughtFor,
    };

    localStorage.setItem("assets", JSON.stringify(assets));
  }

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <form onSubmit={handleApiKeySubmit}>
        <label htmlFor="api-key">API Key: </label>
        <input type="text" ref={apiKeyRef} name="api-key" />
        <button type="submit">Save</button>
      </form>

      <br />

      <form onSubmit={handleAssetSubmit}>
        <h2>Add an asset</h2>
        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </p>

        <p>
          <label htmlFor="amount">Amount: </label>
          <input type="text" name="amount" />
        </p>

        <p>
          <label htmlFor="bought-for">Bought For: </label>
          <input type="text" name="bought-for" />
        </p>

        <p>
          <button type="submit">Add</button>
        </p>
      </form>
    </div>
  );
}

export default App;
