import React from 'react';
import './styles.css';
import CartLogo from './cart.svg';
const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={CartLogo} alt="un logo lindo de carrito" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;