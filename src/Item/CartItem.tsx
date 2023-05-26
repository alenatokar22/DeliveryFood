import React from 'react';
import '../scss/cartItem.scss';

interface CartItemProps {
  name: string;
  price: string;
}

class CartItem extends React.Component<CartItemProps> {
  render() {
    const { name, price } = this.props;

    return (
      <div className="cart-item">
        <div className="item-info">
          <span className="item-name">{name}</span>
          <span className="item-price">${price}</span>
        </div>
        {/* <button className="remove-button">Удалить</button> */}
      </div>
    );
  }
}

export default CartItem;
