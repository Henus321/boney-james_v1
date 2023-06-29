export interface UserState {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  name: string;
  email: string;
}

export enum USER_ACTION_TYPES {
  SET_USER_TO_DEFAULT = '@@user/SET_USER_TO_DEFAULT',
  SET_CURRENT_USER = '@@user/SET_CURRENT_USER',
}

interface SetUserToDefault {
  type: USER_ACTION_TYPES.SET_USER_TO_DEFAULT;
}

interface SetCurrentUser {
  type: USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: CurrentUser;
}

export type UserAction = SetUserToDefault | SetCurrentUser;
