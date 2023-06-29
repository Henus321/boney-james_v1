import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import { FaHeart } from 'react-icons/fa';
import Loader from '../../components/loader/Loader';
import Slider from '../../components/slider/Slider';
import ItemButton from '../../components/item-button/ItemButton';
import ItemSizes from '../../components/item-sizes/ItemSizes';
import './item.scss';

const Item: React.FC = () => {
  const { fetchItemStartAsync, clearItem, toggleBookmark } = useActions();
  const { bookmarks, item } = useTypedSelector((state) => state);
  const { currentItem, colorId, isLoading } = item;
  const { bookmarksId } = bookmarks;

  const params = useParams();
  const coatId = params.coatId!;
  const season = params.season!;
  const year = params.year!;
  const bookmarked = bookmarksId.includes(coatId);

  useEffect(() => {
    fetchItemStartAsync(coatId);

    return () => {
      clearItem();
    };
    // eslint-disable-next-line
  }, [coatId]);

  const toggleBookmarkHandler = () => {
    toggleBookmark(coatId);
  };

  return (
    <div className="item">
      {isLoading ? (
        <Loader />
      ) : (
        currentItem && (
          <div className="item__container" key={uuidv4()}>
            <Slider photoUrls={currentItem.photoUrls} />
            <div className="item__info">
              <p>
                <Link
                  className="item__back-link"
                  to={`/collection/${year}/${season}`}
                >
                  Коллекция
                </Link>
                <span className="item__span-text"> - </span>
                <span className="item__span-text">Весна</span>
                <span className="item__span-text"> - </span>
                <span className="item__span-text">Пальто-Халат</span>
              </p>
              <h2 className="item__title">{currentItem.name}</h2>
              <span className="item__item">{currentItem.price}&#8381;</span>
              <span className="item__item">Артикул: {currentItem.article}</span>
              <span className="item__item">
                Состав: {currentItem.composition}
              </span>
              <span className="item__item">
                Подкладка: {currentItem.lining}
              </span>
              <span className="item__item">Рост: {currentItem.height}</span>
              <span className="item__item">Цвета:</span>
              <div className="item__item item__colors">
                {colorId &&
                  colorId.map((colorId) => (
                    <Link
                      to={`/collection/${year}/${season}/item/${colorId.id}`}
                      className={
                        colorId.id === coatId
                          ? `item__color item__color--${colorId.color} item__color--active`
                          : `item__color item__color--${colorId.color}`
                      }
                      key={colorId.id}
                    />
                  ))}
              </div>
              <span className="item__item">Размеры:</span>
              <div className="item__sizes">
                <ItemSizes />
              </div>
              <span className="item__item">
                Страна-производитель: {currentItem.country}
              </span>
              <span className="item__item">Описание:</span>
              <span className="item__item item__description">
                {currentItem.description}
              </span>
              <div className="item__buttons-container">
                <ItemButton />
                <FaHeart
                  onClick={toggleBookmarkHandler}
                  className={
                    bookmarked ? 'item__icon item__icon--active' : 'item__icon'
                  }
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Item;
