import React from 'react';
import {Link} from 'react-router-dom';

function AboutWebSitePage() {
  return (
    <div className='about-web-site-page'>
      <div className='public-offer-page__btn-back-wrapper'>
        <Link to='/'>
          <button className='cart__empty-btn-back'>
                Вернуться на главную
          </button>
        </Link>
      </div>
      <div className='about-web-site-page__text'>

        <h1 className='about-web-site-page__title'>О САЙТЕ</h1>

        <div className='about-web-site-page__intro'>
          <p>
            Привет! Меня зовут Василий и это web-приложение
            является моим учебным проектом.
          </p>
          <p>
            Дизайн полностью разрабатывался мной, для разработки
            дизайна использовал &laquo;Figma&raquo;.
          </p>
        </div>

        <div className='about-web-site-page__stack'>
          <h2 className='about-web-site-page__subtitle'>
            Применен следующий stack:
          </h2>
          <ul className='about-web-site-page__stack-list'>
            <li className='about-web-site-page__stack-item'>
              &#128073; ReactJS + хуки;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; React Router - для маршрутизации в
              приложении между компонентами;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; Redux - для хранения общего состояния приложения;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; Redux thunk - в этом приложении используется
              для работы с ReduxDevTools;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; json-server - используется в качестве сервера с которого
              приложение получает данные о списке продуктов;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; Axios - получает данные с сервера;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; swiper - слайдер с &laquo;промо-баннерами&raquo;
              на главной странице;
            </li>
            <li className='about-web-site-page__stack-item'>
              &#128073; prop-types - для проверки типов
              данных приходящих в компоненты.
            </li>
          </ul>
        </div>

        <div className='about-web-site-page__styles-info'>
          <p>
            &#128293; Стили написаны на препроцессоре &laquo;SCSS(saas)&raquo;
          </p>
        </div>

        <p className='about-web-site-page__github-link'>
          &#9889; Ссылка на GitHub:
          <a href='https://github.com/vv-tomilin/sushi_store'>
            <br/>https://github.com/vv-tomilin/sushi_store
          </a>
        </p>

        <div className='about-web-site-page__contacts'>
          <h2 className='about-web-site-page__subtitle'>Контакты:</h2>
          <ul>
            <li className='about-web-site-page__contacts-item'>
              <span>Email</span>: &nbsp;
              <a href='mailto:backatom1@gmail.com'>backatom1@gmail.com</a>
            </li>
            <li className='about-web-site-page__contacts-item'>
              <span>WhatsApp, Viber</span>: &nbsp;
              <a href='https://wa.me/79619649736 '>+79619649736</a> (без звонков)
            </li>
            <li className='about-web-site-page__contacts-item'>
              <span>Telegram</span>: &nbsp;
              <a href='tg://resolve?domain=@vv_tomilin'>@vv_tomilin</a>
            </li>
          </ul>
        </div>

        <p className='about-web-site-page__ps-text'>
          * В списке продуктов на главной странице приложения,
          а конкретно: изображения продуктов, их состав, вес
          стоимость взяты с сайта sushi-master.ru и использованны
          только для учебных целей, ни для каких других целей
          данные материалы не использовались и использоватся не будут.
        </p>

      </div>
      <div className='public-offer-page__btn-back-wrapper'>
        <Link to='/'>
          <button className='cart__empty-btn-back'>
                Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutWebSitePage;
