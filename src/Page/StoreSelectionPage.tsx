import React from "react";
import StoreItem from "../Item/StoreItem";
import {storesData} from "../Stores/storesData";
import "../scss/storeSelectionPage.scss";

class StoreSelectionPage extends React.Component {
  render() {
    return (
      <div className="store-selection-page">
        <h1>Shops:</h1>
        <div className="store-items">
          {Object.keys(storesData).map((storeName) => (
            <StoreItem key={storesData[storeName].id} name={storeName} />
          ))}
        </div>
      </div>
    );
  }
}

export default StoreSelectionPage;
