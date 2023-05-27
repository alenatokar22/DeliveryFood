import React from "react";
import CartItem from "../Item/CartItem";

class ShoppingCartPage extends React.Component {
  render() {
    return (
      <>
        <div className="shopping-cart__page">
          <div className="cart-order">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="input" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="input" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="input" />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="input"
              />
            </div>
          </div>
          <div className="cart-items">
            <CartItem name={name}/>
            </div>
        </div>
        <div className="cart-total">
          <span>Total price:</span>
          <button className="cart-total__btn">Submit</button>
        </div>
      </>
    );
  }
}

export default ShoppingCartPage;
