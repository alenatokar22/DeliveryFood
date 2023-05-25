import React from "react";
import StoreItem from "../Item/StoreItem";
import "../scss/StoreSelectionPage.scss";

class StoreSelectionPage extends React.Component {
  render() {
    return (
      <div className="store-selection-page">
        <h1>Shops:</h1>
        <div className="store-items">
          <StoreItem name="McDonald’s" />
          <StoreItem name="KFC" />
          <StoreItem name="Burger King" />
          <StoreItem name="Starbucks" />
          <StoreItem name="Domino’s Pizza" />
        </div>
      </div>
    );
  }
}

export default StoreSelectionPage;
