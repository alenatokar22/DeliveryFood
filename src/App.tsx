import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreSelectionPage from "./Page/StoreSelectionPage";

class App extends React.Component {
  render() {
    return (
      <div className="pages">
        <div className="container">
          <Router>
            <a href="" className="breadcrumbs">
              Shops
            </a>
            <a href="" className="breadcrumbs">
              Shopping cart
            </a>
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<StoreSelectionPage />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
