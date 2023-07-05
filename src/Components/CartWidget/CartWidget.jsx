import React from 'react';
import icon from './cart'

const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <div className="cart-widget">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <icon size="2x" color="white" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;