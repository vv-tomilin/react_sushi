import React from 'react';
import {Link} from 'react-router-dom';

function DeliveryInfoPage() {
  return (
    <div className='delivery-info-page'>
      <div className='delivery-info-page__text'>
        <h1 className='delivery-info-page__title'>УСЛОВИЯ ДОСТАВКИ</h1>
        <p>
          Заказы на доставку принимаются ежедневно
          по телефону +7(999)000-99-99 или online через наш сайт
          c 10-00 до 00-00 в будние дни.
          И до 02-00 в пятницу и субботу.
        </p>
        <p>
          Каждый заказ мы готовим только после того как поступит заявка от вас.
          Индивидуально проверяем качество каждого отправляемого заказа перед
          отправкой.
        </p>
        <div className='delivery-info-page__time-price-wrapper'>
          <div>
            <h2 className='delivery-info-page__subtitle'>Заказы принимаем</h2>
            <p>ВС-ЧТ с 10-00 до 00-00</p>
            <p>ПТ-СБ с 10-00 до 02-00</p>
          </div>
          <div>
            <h2 className='delivery-info-page__subtitle'>Стоимость доставки</h2>
            <p>от 100 до 450 рублей</p>
          </div>
        </div>
      </div>
      <div className='delivery-info-page__btn-back-wrapper'>
        <Link to='/'>
          <button className='cart__empty-btn-back'>
                Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DeliveryInfoPage;
