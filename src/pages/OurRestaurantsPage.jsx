import React from 'react';
import {Link} from 'react-router-dom';

function OurRestaurantsPage() {
  return (
    <div className='our-restaurants-page'>
      <h1 className='our-restaurants-page__title'>НАШИ РЕСТОРАНЫ</h1>
      <ul className='our-restaurants-page__city-list'>
        <li className='our-restaurants-page__city-item'>
          <h2 className='our-restaurants-page__city-name'>Небывальск</h2>
          <div>
            <div>
              <div>
                <p>г. Небывальск, пр-кт. Пупкина, д. 75</p>
                <div>
                  <span>С 10:00</span>
                  <span> До </span>
                  <span>22:00</span><br/>
                  <p className='our-restaurants-page__phone'>
                    <a href="tel:8999-000-99-99">8 999 000 99 99</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className='our-restaurants-page__city-item'>
          <h2 className='our-restaurants-page__city-name'>
            Чуваковск-на-Халтуре
          </h2>
          <div>
            <div>
              <div>
                <p>г. Чуваковск-на-Халтуре, ул. Калабалы-Бухалы, д. 75</p>
                <div>
                  <span>С 10:00</span>
                  <span> До </span>
                  <span>22:00</span><br/>
                  <p className='our-restaurants-page__phone'>
                    <a href="tel:8999-000-99-98">8 999 000 99 98</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className='our-restaurants-page__city-item'>
          <h2 className='our-restaurants-page__city-name'>Нью-Кворк</h2>
          <div>
            <div>
              <div>
                <p>г. Нью-Кворк, б-р. Пыни, д. 75</p>
                <div>
                  <span>С 10:00</span>
                  <span> До </span>
                  <span>22:00</span><br/>
                  <p className='our-restaurants-page__phone'>
                    <a href="tel:8999-000-99-97">8 999 000 99 97</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className='our-restaurants-page__btn-back-wrapper'>
        <Link to='/'>
          <button className='cart__empty-btn-back'>
                Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurRestaurantsPage;
