import { SizeAction, SizeState, SIZE_ACTION_TYPES } from '../../types/size';

const initialState: SizeState = {
  currentSize: '42',
  sizes: ['42', '44', '46', '48'],
};

export const sizeReducer = (
  state: SizeState = initialState,
  action: SizeAction
): SizeState => {
  switch (action.type) {
    case SIZE_ACTION_TYPES.SET_CURRENT_SIZE:
      return {
        ...state,
        currentSize: action.payload,
      };
    default:
      return state;
  }
};
