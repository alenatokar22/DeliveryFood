import React from 'react';
import '../scss/StoreItem.scss';

interface StoreItemProps {
  name: string;
}

class StoreItem extends React.Component<StoreItemProps> {
  render() {
    const { name } = this.props;

    return (
      <div className="store-item">
        <span className="store-item__name">{name}</span>
      </div>
    );
  }
}

export default StoreItem;
