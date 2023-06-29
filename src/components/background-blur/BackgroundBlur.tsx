import React from 'react';

import './backgroundBlur.scss';

interface BackgroundBlurProps {
  isActive: boolean;
  handler: () => void;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
  isActive,
  handler,
}) => {
  return (
    <div
      className={isActive ? 'background-blur--active' : 'background-blur'}
      onClick={handler}
    ></div>
  );
};

export default BackgroundBlur;
