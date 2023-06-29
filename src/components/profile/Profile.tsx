import React from 'react';
import { getAuth } from 'firebase/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import BackgroundBlur from '../background-blur/BackgroundBlur';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import UserDetails from './user-details/UserDetails';
import ProfileHeading from './profile-heading/ProfileHeading';
import './profile.scss';

const Profile: React.FC = () => {
  const { toggleProfileMenu } = useActions();
  const { isProfileMenuActive, menuType } = useTypedSelector(
    (state) => state.profile
  );

  const auth = getAuth();

  const closeProfileMenuHandler = () => toggleProfileMenu(false);

  return (
    <>
      <BackgroundBlur
        isActive={isProfileMenuActive}
        handler={closeProfileMenuHandler}
      />
      <div
        className={isProfileMenuActive ? 'profile profile--active' : 'profile'}
      >
        {auth.currentUser ? (
          <UserDetails />
        ) : (
          <>
            <ProfileHeading />
            {menuType === 'sign-in' ? <SignIn /> : false}
            {menuType === 'sign-up' ? <SignUp /> : false}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
