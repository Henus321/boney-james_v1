import { BOOKMARKS_ACTION_TYPES } from '../../types/bookmarks';

export const toggleBookmark = (id: string) => ({
  type: BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: id,
});
