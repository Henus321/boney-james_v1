import * as BookmarksActionCreators from './bookmarks';
import * as CartActionCreators from './cart';
import * as CollectionActionCreators from './collection';
import * as ItemActionCreators from './item';
import * as ProfileActionCreators from './profile';
import * as SizeActionCreators from './size';
import * as UserActionCreators from './user';

// eslint-disable-next-line
export default {
  ...BookmarksActionCreators,
  ...CartActionCreators,
  ...CollectionActionCreators,
  ...ItemActionCreators,
  ...ProfileActionCreators,
  ...SizeActionCreators,
  ...UserActionCreators,
};
