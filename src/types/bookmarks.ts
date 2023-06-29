export enum BOOKMARKS_ACTION_TYPES {
  TOGGLE_BOOKMARK = '@@bookmarks/TOGGLE_BOOKMARK',
}

export interface BookmarkState {
  bookmarksId: string[];
  isBookmarks: boolean;
}

interface toggleBookmark {
  type: BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK;
  payload: string;
}

export type BookmarksAction = toggleBookmark;
