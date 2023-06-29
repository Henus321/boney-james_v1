import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { v4 as uuidv4 } from 'uuid';

import './itemSizes.scss';

const ItemSizes: React.FC = () => {
  const { setCurrentSize } = useActions();
  const { currentSize, sizes } = useTypedSelector((state) => state.size);

  const setCurrentSizeHandler = (size: string) => {
    setCurrentSize(size);
  };

  return (
    <>
      {sizes.map((size) => (
        <div
          onClick={() => setCurrentSizeHandler(size)}
          className={currentSize === size ? 'item-size--active' : 'item-size'}
          key={uuidv4()}
        >
          {size}
        </div>
      ))}
    </>
  );
};

export default ItemSizes;
