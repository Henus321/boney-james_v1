import {
  ProfileAction,
  ProfileState,
  PROFILE_ACTION_TYPES,
} from '../../types/profile';

const initialState: ProfileState = {
  isProfileMenuActive: false,
  menuType: 'sign-in',
};

export const profileReducer = (
  state: ProfileState = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.TOGGLE_PROFILE_MENU:
      return {
        ...state,
        isProfileMenuActive: action.payload,
      };
    case PROFILE_ACTION_TYPES.SET_MENU_TYPE:
      return {
        ...state,
        menuType: action.payload,
      };
    default:
      return state;
  }
};
