import {
  ColorId,
  Item,
  ItemAction,
  ItemState,
  ITEM_ACTION_TYPES,
} from '../../types/item';

const initialItem: Item = {
  name: '',
  price: 0,
  photoUrls: [''],
  article: '',
  color: '',
  composition: '',
  lining: '',
  height: '',
  country: '',
  season: '',
  id: '',
  mainPhotoUrl: '',
  description: '',
  possibleColors: [''],
  sizes: [''],
  year: '',
  quantity: 0,
};

const initialColorId: ColorId = {
  color: '',
  id: '',
};

const initialState: ItemState = {
  currentItem: initialItem,
  colorId: [initialColorId],
  isLoading: false,
  error: null,
};

export const itemReducer = (
  state: ItemState = initialState,
  action: ItemAction
): ItemState => {
  switch (action.type) {
    case ITEM_ACTION_TYPES.FETCH_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case ITEM_ACTION_TYPES.FETCH_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ITEM_ACTION_TYPES.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentItem: action.payload,
      };
    case ITEM_ACTION_TYPES.SET_COLOR_AND_ID:
      return {
        ...state,
        colorId: action.payload,
      };
    case ITEM_ACTION_TYPES.CLEAR_ITEM:
      return initialState;
    default:
      return state;
  }
};
