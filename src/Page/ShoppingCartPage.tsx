import React from 'react';
import CartItem from '../Item/CartItem';
import '../scss/shoppingCartPage.scss';

class ShoppingCartPage extends React.Component {
  render() {
    return (
      <div className="shopping-cart-page">
        <div className="cart-items">
          <CartItem name="Товар 1" price="10" />
          <CartItem name="Товар 2" price="15" />
          <CartItem name="Товар 3" price="20" />
        </div>
        <div className="cart-buttons">
          <button className="change-total-button">Изменить счет</button>
          <button className="remove-items-button">Удалить выбранные товары</button>
          <button className="submit-order-button">Отправить заказ</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCartPage;
