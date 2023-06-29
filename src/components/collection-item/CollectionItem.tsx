import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Item } from '../../types/item';

import { FaHeart } from 'react-icons/fa';
import './collectionItem.scss';

interface CollectionItemProps {
  collectionItem: Item;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collectionItem }) => {
  const { toggleBookmark, addToCart } = useActions();
  const { bookmarksId } = useTypedSelector((state) => state.bookmarks);
  const {
    id,
    mainPhotoUrl,
    name,
    article,
    price,
    possibleColors,
    color,
    season,
    sizes,
    year,
  } = collectionItem;

  const bookmarked = bookmarksId.includes(id);
  const navigate = useNavigate();

  const toggleBookmarkHandler = () => {
    toggleBookmark(id);
  };

  const navigateToItemHandler = () => {
    navigate(`/collection/${year}/${season}/item/${id}`);
  };

  const AddToCartHandler = (item: Item, currentSize: string) => {
    addToCart(item, currentSize);
    toast.success('Товар добавлен');
  };

  return (
    <div className="collection-item" key={id}>
      <div className="collection-item__image-container">
        <img
          className="collection-item__image"
          src={mainPhotoUrl}
          alt={name}
          onClick={navigateToItemHandler}
        />
        <div className="collection-item__hover-container">
          <h3 className="collection-item__hover-title">Добавить в корзину</h3>
          {sizes &&
            sizes.map((size) => (
              <div
                onClick={() => AddToCartHandler(collectionItem, size)}
                className="collection-item__hover-size"
                key={uuidv4()}
              >
                {size}
              </div>
            ))}
        </div>
      </div>
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__article">Арт.: {article}</span>
      <span className="collection-item__cost">{price}&#8381;</span>
      <div className="collection-item__color-circles">
        {possibleColors.map((posColor) => (
          <div
            key={uuidv4()}
            className={
              posColor === color
                ? `collection-item__color collection-item__color--${posColor} collection-item__color--active`
                : `collection-item__color collection-item__color--${posColor}`
            }
          ></div>
        ))}
      </div>
      <FaHeart
        onClick={toggleBookmarkHandler}
        className={
          bookmarked
            ? 'collection-item__icon collection-item__icon--active'
            : 'collection-item__icon'
        }
      />
    </div>
  );
};

export default CollectionItem;
