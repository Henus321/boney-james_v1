import { getAuth } from 'firebase/auth';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toast } from 'react-toastify';

import { FaTrash } from 'react-icons/fa';
import Button from '../button/Button';
import './checkoutTotal.scss';

const CheckoutTotal = () => {
  const { cartToInitialState, toggleProfileMenu } = useActions();
  const { profile, cart } = useTypedSelector((state) => state);
  const { cartTotal, currentCart } = cart;
  const { isProfileMenuActive } = profile;

  const cartQuantity = currentCart.reduce((acc: number, item: any) => {
    return acc + item.quantity;
  }, 0);
  const auth = getAuth();

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

  const cartToInitialStateHandler = () => {
    cartToInitialState();
  };

  const toggleProfileMenuHandler = () => {
    toggleProfileMenu(!isProfileMenuActive);
  };

  const payForItems = () => {
    // TEMPORARY, NAVIGATION TO PAYMENT?
    return auth.currentUser
      ? toast.error('The purchase is temporarily unavailable')
      : toggleProfileMenuHandler();
  };

  return (
    <div className="checkout-total">
      <span className="checkout-total__title">Итого</span>
      <span className="checkout-total__price">{cartTotal}&#8381;</span>
      <span className="checkout-total__item">
        {cartQuantity} {itemsQuantityName(cartQuantity)}
      </span>
      <FaTrash
        className="checkout-total__trash-btn"
        onClick={cartToInitialStateHandler}
      />
      <Button
        buttonType="wide-black checkout-total__button"
        buttonText="Оплатить покупку"
        handler={payForItems}
      />
    </div>
  );
};

export default CheckoutTotal;
