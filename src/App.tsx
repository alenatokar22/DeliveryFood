import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/index.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes></Routes>
        </div>
      </Router>
    );
  }
}

export default App;
