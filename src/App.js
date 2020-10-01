import React from "react";
import MainRouter from "./Router";
import * as Env from "./environments"
import Parse from "parse";
import "./App.css";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverUrl = Env.SERVER_URL;

function App() {
  return (
      <div className="App">
        <MainRouter/>
      </div>
  );
}

export default App;
