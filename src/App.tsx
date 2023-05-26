import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StoreSelectionPage from "./Page/StoreSelectionPage";
import StorePage from "./Stores/StorePage";

class App extends React.Component {
  render() {
    return (
      <div className="pages">
        <div className="container">
          <Router>
            <Link to="/" className="breadcrumbs">
              <span>Shops</span>
            </Link>
            <Link to="/" className="breadcrumbs">
              <span>Shopping cart</span>
            </Link>
            <div className="wrapper">
              <StoreSelectionPage />
              <Routes>
                <Route path="/store/:name" element={<StorePage />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
