import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

import Button from '../../button/Button';
import './profileHeading.scss';

const ProfileHeading: React.FC = () => {
  const { setMenuType, toggleProfileMenu } = useActions();
  const { isProfileMenuActive, menuType } = useTypedSelector(
    (state) => state.profile
  );

  const setMenuSignInHandler = () => setMenuType('sign-in');

  const setMenuSignUpHandler = () => setMenuType('sign-up');

  const toggleProfileMenuHandler = () =>
    toggleProfileMenu(!isProfileMenuActive);

  return (
    <div className="profile-heading">
      <h2
        className={
          menuType === 'sign-in'
            ? 'profile-heading__title profile-heading__title--active'
            : 'profile-heading__title'
        }
        onClick={setMenuSignInHandler}
      >
        Войти
      </h2>
      <h2
        className={
          menuType === 'sign-up'
            ? 'profile-heading__title profile-heading__title--active'
            : 'profile-heading__title'
        }
        onClick={setMenuSignUpHandler}
      >
        Регистрация
      </h2>
      <Button
        buttonType="close"
        handler={toggleProfileMenuHandler}
        buttonText="x"
      />
    </div>
  );
};

export default ProfileHeading;
