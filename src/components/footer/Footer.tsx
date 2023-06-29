import React from 'react';

import { FaVk, FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <h2 className="footer__title-contacts">Контакты</h2>
        <span>
          Тел.: 8 (800) 000-000-00
          <br />
          Почта: Tyrantbud@yandex.ru
        </span>
      </div>

      <div className="footer__information">
        <h2 className="footer__title">Где купить?</h2>
        <p className="footer__text">
          Продукцию нашего бренда вы можете приобрести, в магазинах торговых
          сетей{' '}
          <a
            className="footer__social-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.fashouse.ru/shops"
          >
            Fashouse
          </a>{' '}
          и Familia
        </p>
      </div>

      <div className="footer__social-media">
        <h2 className="footer__title">Давайте дружить!</h2>
        <div className="footer__social">
          <a
            className="footer__social-item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtube.com/"
          >
            <FaYoutube />
          </a>
          <a
            className="footer__social-item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vk.com/"
          >
            <FaVk />
          </a>
          <a
            className="footer__social-item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Henus321"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <span className="footer__copyright">
        2022 &#169; Developed by Alexandr Erkhov
      </span>
    </footer>
  );
};

export default Footer;
