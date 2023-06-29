import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../../types/item';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import Loader from '../../components/loader/Loader';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.scss';

const Collection: React.FC = () => {
  const { fetchCollectionStartAsync } = useActions();
  const { currentCollection, isLoading } = useTypedSelector(
    (state) => state.collections
  );

  const params = useParams();
  const season = params.season!;
  const year = params.year!;
  const seasonCollection: Item[] = currentCollection.filter(
    (item: Item) => item.season === season
  );

  useEffect(() => {
    fetchCollectionStartAsync();
    // eslint-disable-next-line
  }, []);

  const seasonFromParams = (season: string) =>
    season === 'spring' ? 'Весна' : 'Осень';

  return (
    <div className="collection">
      <span className="collection__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>{seasonFromParams(season)}</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - {year}</h2>
      <div className="collection__body">
        {isLoading ? (
          <Loader />
        ) : (
          seasonCollection.length > 0 &&
          seasonCollection.map((collectionItem: Item) => (
            <CollectionItem collectionItem={collectionItem} key={uuidv4()} />
          ))
        )}
      </div>
    </div>
  );
};

export default Collection;
