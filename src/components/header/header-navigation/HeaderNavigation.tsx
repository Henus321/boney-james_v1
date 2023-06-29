import React from 'react';
import { NavLink } from 'react-router-dom';

import DropMenu from '../../drop-menu/DropMenu';
import './headerNavigation.scss';

interface HeaderNavigationProps {
  isBurgerActive: boolean;
  setBurgerActive: (value: boolean) => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  isBurgerActive,
  setBurgerActive,
}) => {
  const onToggleCheckbox = () => {
    setBurgerActive(!isBurgerActive);
    window.scrollTo(0, 0);
  };

  return (
    <div className="header-navigation">
      <input
        className="header-navigation__checkbox"
        type="checkbox"
        id="checkbox"
        checked={isBurgerActive}
        onChange={() => setBurgerActive(!isBurgerActive)}
      />
      <label className="header-navigation__label" htmlFor="checkbox"></label>
      <span className="header-navigation__burger-icon"></span>

      <nav className="header-navigation__nav">
        <ul className="header-navigation__list">
          <li className="header-navigation__item">
            <NavLink to="/" onClick={onToggleCheckbox}>
              Главная
            </NavLink>
          </li>
          <li className="header-navigation__item-mobile">
            <NavLink to="/collection/2021/autumn" onClick={onToggleCheckbox}>
              Каталог Осень 2021
            </NavLink>
          </li>
          <li className="header-navigation__item-mobile">
            <NavLink to="/collection/2022/spring" onClick={onToggleCheckbox}>
              Каталог Весна 2022
            </NavLink>
          </li>
          <DropMenu parentClassName="header-navigation__item" />
          <li className="header-navigation__item">
            <NavLink to="/about" onClick={onToggleCheckbox}>
              Покупателям
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
