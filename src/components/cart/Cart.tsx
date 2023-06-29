import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';
import BackgroundBlur from '../background-blur/BackgroundBlur';
import './cart.scss';

const Cart: React.FC = () => {
  const { toggleCart, toggleCartStatus, setCartTotal, setCartQuantity } =
    useActions();
  const { currentCart, cartTotal, cartQuantity, isCartActive } =
    useTypedSelector((state) => state.cart);

  const defaultCart = 0;
  const navigate = useNavigate();

  useEffect(() => {
    currentCart.length > 0 ? toggleCartStatus(true) : toggleCartStatus(false);
    if (currentCart.length > 0) {
      const total = currentCart.reduce((acc, item) => {
        const curValue = item.price * item.quantity;
        return acc + curValue;
      }, 0);
      const cartQty = currentCart.reduce((acc: number, item: any) => {
        return acc + item.quantity;
      }, 0);
      setCartTotal(total);
      setCartQuantity(cartQty);
    }
    if (currentCart.length === 0) {
      setCartTotal(defaultCart);
      setCartQuantity(defaultCart);
    }
    // eslint-disable-next-line
  }, [currentCart]);

  const itemsQuantityName = (cartLength: number) => {
    switch (cartLength) {
      case 1:
        return 'Товар';
      case 2:
      case 3:
      case 4:
        return 'Товара';
      default:
        return 'Товаров';
    }
  };

  const closeCartMenu = () => {
    toggleCart(false);
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
    toggleCart(false);
  };

  return (
    <>
      <BackgroundBlur isActive={isCartActive} handler={closeCartMenu} />
      <div className={isCartActive ? 'cart cart--active' : 'cart'}>
        <div className="cart__heading">
          <h2 className="cart__title">
            Корзина&nbsp;
            <span className="cart__items-quantity">
              -&nbsp;{currentCart.length > 0 ? cartQuantity : '0'}&nbsp;
              {itemsQuantityName(cartQuantity)}
            </span>
          </h2>
          <Button buttonType="close" handler={closeCartMenu} buttonText="x" />
        </div>
        <div className="cart__items-container">
          {currentCart.length > 0 ? (
            currentCart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={uuidv4()} />
            ))
          ) : (
            <h2 className="cart__warning">В корзине нет товаров</h2>
          )}
        </div>
        {currentCart.length > 0 && (
          <div className="cart__order">
            <div className="cart__order-price">
              <span>Итого</span>
              <span>{cartTotal}&#8381;</span>
            </div>
            <Button
              handler={navigateToCheckout}
              buttonText="Оформить заказ"
              buttonType="wide-black"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
