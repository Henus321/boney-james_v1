import { PROFILE_ACTION_TYPES } from '../../types/profile';

export const toggleProfileMenu = (isProfileMenuActive: boolean) => ({
  type: PROFILE_ACTION_TYPES.TOGGLE_PROFILE_MENU,
  payload: isProfileMenuActive,
});

export const setMenuType = (menuType: string) => ({
  type: PROFILE_ACTION_TYPES.SET_MENU_TYPE,
  payload: menuType,
});
