export enum PROFILE_ACTION_TYPES {
  TOGGLE_PROFILE_MENU = '@@profile/TOGGLE_PROFILE_MENU',
  SET_MENU_TYPE = '@@profile/TOGGLE_MENU_TYPE',
}

export interface ProfileState {
  isProfileMenuActive: boolean;
  menuType: string;
}

interface ToggleProfileMenu {
  type: PROFILE_ACTION_TYPES.TOGGLE_PROFILE_MENU;
  payload: boolean;
}

interface SetMenuType {
  type: PROFILE_ACTION_TYPES.SET_MENU_TYPE;
  payload: string;
}

export type ProfileAction = ToggleProfileMenu | SetMenuType;
