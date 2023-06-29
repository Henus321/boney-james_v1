import {
  BookmarksAction,
  BookmarkState,
  BOOKMARKS_ACTION_TYPES,
} from '../../types/bookmarks';

const initialState: BookmarkState = {
  bookmarksId: [],
  isBookmarks: false,
};

export const bookmarksReducer = (
  state = initialState,
  action: BookmarksAction
) => {
  switch (action.type) {
    case BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK:
      if (state.bookmarksId.includes(action.payload)) {
        return {
          ...state,
          bookmarksId: [
            ...state.bookmarksId.filter((id) => id !== action.payload),
          ],
        };
      }
      return {
        ...state,
        bookmarksId: [...state.bookmarksId, action.payload],
      };
    default:
      return state;
  }
};
