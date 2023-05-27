import React from "react";

interface CartItemProps {
  name: string;
  price: string;
  imageUrl: string;
}

class CartItem extends React.Component<CartItemProps> {
  render() {
    const { name, price, imageUrl } = this.props;

    return (
      <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-info">
          <span className="item-name">{name}</span>
          <span className="item-price">${price}</span>
        </div>
      </div>
    );
  }
}

export default CartItem;
