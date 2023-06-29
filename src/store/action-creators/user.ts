import { CurrentUser, USER_ACTION_TYPES } from '../../types/user';

export const setUser = (currentUser: CurrentUser) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: currentUser,
});

export const setUserToDefault = () => ({
  type: USER_ACTION_TYPES.SET_USER_TO_DEFAULT,
});
