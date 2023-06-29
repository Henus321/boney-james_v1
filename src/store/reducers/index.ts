import { combineReducers } from 'redux';

import { collectionReducer } from './collection';
import { cartReducer } from './cart';
import { itemReducer } from './item';
import { userReducer } from './user';
import { profileReducer } from './profile';
import { bookmarksReducer } from './bookmarks';
import { sizeReducer } from './size';

export const rootReducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
  item: itemReducer,
  user: userReducer,
  profile: profileReducer,
  bookmarks: bookmarksReducer,
  size: sizeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
