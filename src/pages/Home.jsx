import React from 'react';

import {
  logo,
  cityIcon,
  cartIcon,
  filterIcon,
  filterArrow,
  footerLogo,
} from '../assets/logo and icons';
import bannerMob from '../assets/images/banner_mob.jpg';
import rollFudzi from '../assets/images/roll_fudzi.jpg';

const Home = () => {
  return (
    <div>
      <header>
        <img src={logo} alt='logo'/>
        <div>
          <img src={cityIcon} alt='location_ico' />
          <a href='#'>Пермь</a>
          <a href='#'>+7(342)000-00-00</a>
        </div>
        <nav>
          <ul>
            <li>Роллы и суши</li>
            <li>Сеты</li>
            <li>WOK</li>
            <li>Горячее и салаты</li>
            <li>Комбо</li>
            <li>Детское меню</li>
            <li>Фирменное меню</li>
          </ul>
        </nav>
        <ul>
          <li>
            <a href='#' >
              <img src={cartIcon} alt='cart_icon' />
              <p>Корзина</p>
            </a>
          </li>
        </ul>
      </header>

      <main>
        <h1>Интернет магазин японской кухни &laquo;SushiZen&raquo;</h1>

        <section>
          <h2>Фильтры и сортировка</h2>
          <img src={filterIcon} alt='filter_icon' />
          <p>Фильтры и сортировка</p>
          <img src={filterArrow} />
        </section>

        <section>
          <h2>Выбранная категория</h2>
          <p>Роллы и суши</p>
        </section>

        <section>
          <h2>Баннеры проходящих акций и скидок</h2>
          <img src={bannerMob} />
          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </section>

        <section>
          <h2>Информация</h2>
          <ul>
            <li>
              <a href='#'>Акции</a>
            </li>
            <li>
              <a href='#'>Бонусы</a>
            </li>
            <li>
              <a href='#'>Условия доставки</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Список товаров выбранной категории</h2>
          <ul>
            <li>
              <div>
                <img src={rollFudzi} />
                <h3>Ролл Фудзи</h3>
                <div>
                  <p>
              Лосось копченый, рис, свежий огурец, <br/>
              соус “лава”, зеленый лук, омлет, кунж...
                  </p>
                  <span>230 г.</span>
                </div>
                <div>
                  <p>159 ₽</p>
                  <button>Состав</button>
                  <button>В корзину</button>
                </div>
              </div>
            </li>
            <li>
              <div>
                <img src={rollFudzi} />
                <h3>Ролл Фудзи</h3>
                <div>
                  <p>
              Лосось копченый, рис, свежий огурец, <br/>
              соус “лава”, зеленый лук, омлет, кунж...
                  </p>
                  <span>230 г.</span>
                </div>
                <div>
                  <p>159 ₽</p>
                  <button>Состав</button>
                  <button>В корзину</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <h2>Дополнительная информация</h2>
        <section>
          <div>
            <img src={footerLogo} />
            <p>2021 © ИП Иванов И. И.</p>
          </div>

          <div>
            <ul>
              <li>
                <a href='#'>Публичная оферта</a>
              </li>
              <li>
                <a href='#'>Политика конфиденциальности</a>
              </li>
              <li>
                <a href='#'>Полные реквизиты</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href='#'>Наши рестораны</a>
              </li>
              <li>
                <a href='#'>Карьера</a>
              </li>
            </ul>
          </div>

          <div>
            <a href='#'>Служба доставки</a>
            <a>+7(342)000-00-00</a>
          </div>
        </section>

        <section>
          <h2>Мы в социальных сетях</h2>
          <ul>
            <li>
              <a href='#'>Фейсбук</a>
            </li>
            <li>
              <a href='#'>Инстаграм</a>
            </li>
            <li>
              <a href='#'>Вконтакте</a>
            </li>
            <li>
              <a href='#'>Твиттер</a>
            </li>
            <li>
              <a href='#'>Одноклассники</a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Home;
