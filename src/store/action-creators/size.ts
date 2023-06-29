import { SizeAction, SIZE_ACTION_TYPES } from '../../types/size';

export const setCurrentSize = (size: string): SizeAction => ({
  type: SIZE_ACTION_TYPES.SET_CURRENT_SIZE,
  payload: size,
});
