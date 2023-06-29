import { useState } from 'react';
import { Link } from 'react-router-dom';

import Plug from '../plug/Plug';
import Cart from '../cart/Cart';
import Profile from '../profile/Profile';
import HeaderIconsMenu from './header-icons-menu/HeaderIconsMenu';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import './header.scss';

const Header: React.FC = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  return (
    <header className="header">
      <Plug />
      <Cart />
      <Profile />
      <HeaderNavigation
        isBurgerActive={isBurgerActive}
        setBurgerActive={setBurgerActive}
      />
      <Link to="/" className="header__title">
        Boney James
      </Link>
      <Link to="/" className="header__title--small">
        BJ
      </Link>
      <HeaderIconsMenu setBurgerActive={setBurgerActive} />
    </header>
  );
};

export default Header;
