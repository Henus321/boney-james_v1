import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

import Button from '../../button/Button';
import './userDetails.scss';

const UserDetails: React.FC = () => {
  const { toggleProfileMenu, setUser, setUserToDefault } = useActions();
  const { currentUser } = useTypedSelector((state) => state.user);
  const { name, email } = currentUser;

  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      const curUser = {
        name: auth.currentUser.displayName!,
        email: auth.currentUser.email!,
      };
      setUser(curUser);
    }
    // eslint-disable-next-line
  }, [auth.currentUser]);

  const closeProfileMenuHandler = () => toggleProfileMenu(false);

  const signOutHandler = async () => {
    await auth.signOut();
    setUserToDefault();
    closeProfileMenuHandler();
  };

  return (
    <div className="user-details">
      <div className="user-details__header">
        <Button
          buttonType="close"
          handler={closeProfileMenuHandler}
          buttonText="x"
        />
      </div>
      <div className="user-details__info">
        <span className="user-details__text">Приветствуем вас, {name}!</span>
        <span className="user-details__text">Ваша почта: {email}</span>
      </div>
      <Button
        buttonText="Выйти"
        buttonType="wide-black"
        form="sign-in__form"
        handler={signOutHandler}
      />
    </div>
  );
};

export default UserDetails;
