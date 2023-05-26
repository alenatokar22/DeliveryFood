import React from "react";
import { Link } from "react-router-dom";
import "../scss/StoreData.scss";

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
