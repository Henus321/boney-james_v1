import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import CartItem from '../../components/cart-item/CartItem';
import CheckoutTotal from '../../components/checkout-total/CheckoutTotal';
import './checkout.scss';

const Checkout: React.FC = () => {
  const { currentCart } = useTypedSelector((state) => state.cart);

  return (
    <div className="checkout">
      <span className="checkout__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Оформление</span>
      </span>
      <h2 className="checkout__title">Оформление заказа</h2>
      <div className="checkout__header"></div>
      {currentCart.length > 0 ? (
        currentCart.map((cartItem) => (
          <CartItem cartItem={cartItem} key={uuidv4()} />
        ))
      ) : (
        <div className="checkout__plug">В Корзине нет товаров</div>
      )}
      <CheckoutTotal />
    </div>
  );
};

export default Checkout;
