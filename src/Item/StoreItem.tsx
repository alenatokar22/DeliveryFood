import React from "react";
import "../scss/storeItem.scss";
import { Link } from "react-router-dom";

interface StoreItemProps {
  name: string;
}

class StoreItem extends React.Component<StoreItemProps> {
  render() {
    const { name } = this.props;

    return (
      <div className="store-item">
        <Link to={`/store/${name}`} className="store-item__name">
          {name}
        </Link>
      </div>
    );
  }
}

export default StoreItem;
