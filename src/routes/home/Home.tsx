import React from 'react';
import { Link } from 'react-router-dom';
import home_image_one from '../../assets/home_image_one.jpg';
import home_image_two from '../../assets/home_image_two.jpg';

import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Link className="home__item" to="/collection/2021/autumn">
        <img className="home__image" src={home_image_two} alt="Осень" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Осень 2021</span>
        </div>
      </Link>
      <Link className="home__item" to="/collection/2022/spring">
        <img className="home__image" src={home_image_one} alt="Весна" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Весна 2022</span>
        </div>
      </Link>
      <div className="home__description">
        <h3 className="home__description-title">BONEY JAMES</h3>
        Небольшой семейный бизнес по производству женских пальто зародился в
        Москве более 20 лет назад и успешно развивается по сей день. Обладая
        гибкостью и выверенным подходом к созданию моделей бренд привлек
        внимание крупных торговых сетей и завоевал доверие покупателей. Сейчас
        пальто Boney James можно найти в магазинах почти всех крупных торговых
        центров Москвы. Создавать оригинальные вещи и быть преданными своей
        аудитории - это главные ценности бренда. На сегодняшний день Boney James
        - популярный бренд, который получил признание покупателей во всей Москве
        и ассоциируется с качеством и стилем. Коллекции постоянное обновляются,
        а четкий крой, пристальное внимание к деталям и низкие цены способствуют
        развитию бренда. Boney James - всегда качественные, уникальные и
        произведенные с любовью к своему делу пальто!
      </div>
    </div>
  );
};

export default Home;
