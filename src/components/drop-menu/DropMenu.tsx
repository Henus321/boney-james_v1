import React from 'react';
import { NavLink } from 'react-router-dom';

import './dropMenu.scss';

interface DropMenuProps {
  parentClassName: string;
}

const DropMenu: React.FC<DropMenuProps> = ({ parentClassName }) => {
  return (
    <li className={`${parentClassName} drop-menu`}>
      Каталог
      <div className="drop-menu__list">
        <NavLink className="drop-menu__item" to="/collection/2021/autumn">
          Осень
        </NavLink>
        <NavLink className="drop-menu__item" to="/collection/2022/spring">
          Весна
        </NavLink>
      </div>
    </li>
  );
};

export default DropMenu;
