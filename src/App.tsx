import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StoreSelectionPage from "./Page/StoreSelectionPage";
import StorePage from "./Stores/StorePage";
import ShoppingCartPage from "./Page/ShoppingCartPage";

class App extends React.Component {
  render() {
    return (
      <div className="pages">
        <div className="container">
          <Router>
            <div className="crumbs">
              <Link to="/" className="breadcrumbs">
                <span>Shops</span>
              </Link>
              <Link to="/ShoppingCartPage/" className="breadcrumbs">
                <span>Shopping cart</span>
              </Link>
            </div>
            <Routes>
              <Route path="/" element={<StoreSelectionPage />} />
              <Route path="/ShoppingCartPage/" element={<ShoppingCartPage />} />
              <Route path="/store/:name" element={<StorePage />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
