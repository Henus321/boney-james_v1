import {
  CollectionAction,
  CollectionState,
  COLLECTION_ACTION_TYPES,
} from '../../types/collection';

const initialState = {
  currentCollection: [],
  isLoading: false,
  error: null,
};

export const collectionReducer = (
  state: CollectionState = initialState,
  action: CollectionAction
): CollectionState => {
  switch (action.type) {
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentCollection: action.payload,
      };
    default:
      return state;
  }
};
