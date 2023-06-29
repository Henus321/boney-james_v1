import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

import { FaShoppingBag, FaHeart, FaUser } from 'react-icons/fa';
import './headerIconsMenu.scss';

interface HeaderIconsMenuProps {
  setBurgerActive: (value: boolean) => void;
}

const HeaderIconsMenu: React.FC<HeaderIconsMenuProps> = ({
  setBurgerActive,
}) => {
  const { toggleCart, toggleProfileMenu } = useActions();
  const { profile, cart, bookmarks } = useTypedSelector((state) => state);
  const { isProfileMenuActive } = profile;
  const { cartStatus, isCartActive } = cart;
  const { bookmarksId } = bookmarks;

  const bookmarksQty = bookmarksId.length;
  const navigate = useNavigate();

  const bookmarksNavigateHandler = () => {
    navigate('/bookmarks');
    setBurgerActive(false);
  };

  const toggleCartHandler = () => {
    toggleCart(!isCartActive);
  };

  const toggleProfileMenuHandler = () => {
    toggleProfileMenu(!isProfileMenuActive);
  };

  return (
    <div className="header-icons-menu">
      <div className="header-icons-menu__icon-container">
        <FaHeart
          className="header-icons-menu__icon header-icons-menu__icon-heart"
          onClick={bookmarksNavigateHandler}
        />
        <span
          className={
            bookmarksQty > 0
              ? 'header-icons-menu__heart-span--active'
              : 'header-icons-menu__heart-span'
          }
        ></span>
      </div>
      <div className="header-icons-menu__icon-container">
        <FaShoppingBag
          className="header-icons-menu__icon"
          onClick={toggleCartHandler}
        />
        <span
          className={
            cartStatus
              ? 'header-icons-menu__bag-span--active'
              : 'header-icons-menu__bag-span'
          }
        ></span>
      </div>
      <div className="header-icons-menu__icon-container">
        <FaUser
          className="header-icons-menu__icon"
          onClick={toggleProfileMenuHandler}
        />
        <span className="header-icons-menu__user-span"></span>
      </div>
    </div>
  );
};

export default HeaderIconsMenu;
