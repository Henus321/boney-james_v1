import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { toast } from 'react-toastify';

import './itemButton.scss';

const ItemButton: React.FC = () => {
  const { addToCart } = useActions();
  const { item, size } = useTypedSelector((state) => state);
  const { currentItem } = item;
  const { currentSize } = size;

  const addToCartHandler = () => {
    addToCart(currentItem, currentSize);
    toast.success('Товар добавлен');
  };

  return (
    <button className="button-item" onClick={addToCartHandler}>
      Добавить в корзину
    </button>
  );
};

export default ItemButton;
