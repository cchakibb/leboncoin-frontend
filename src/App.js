import React from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./components/Offers";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Logo Leboncoin</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
