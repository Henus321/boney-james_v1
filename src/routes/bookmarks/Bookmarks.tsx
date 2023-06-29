import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../../types/item';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import Loader from '../../components/loader/Loader';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './bookmarks.scss';

const Bookmarks: React.FC = () => {
  const { fetchCollectionStartAsync } = useActions();
  const { collections, bookmarks } = useTypedSelector((state) => state);
  const { currentCollection, isLoading } = collections;
  const { bookmarksId } = bookmarks;

  const curBookmarks = currentCollection.filter((item: Item) =>
    bookmarksId.includes(item.id)
  );

  useEffect(() => {
    fetchCollectionStartAsync();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bookmarks">
      <span className="bookmarks__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Закладки</span>
      </span>
      <h2 className="bookmarks__title">Ваши закладки</h2>
      <div className="bookmarks__body">
        {isLoading ? (
          <Loader />
        ) : curBookmarks.length > 0 ? (
          curBookmarks.map((bookmarkedItem: Item) => (
            <CollectionItem collectionItem={bookmarkedItem} key={uuidv4()} />
          ))
        ) : (
          <span className="bookmarks__no-items">В закладках нет товаров</span>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
