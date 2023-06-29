import React from 'react';

import loader from '../../assets/loader.gif';
import './loader.scss';

const Loader: React.FC = () => {
  return <img src={loader} alt="loader" className="loader" />;
};

export default Loader;
