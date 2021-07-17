import React from 'react';

function Categories() {
  return (
    <section className='categories'>
      <h2 className='visually-hidden'>Фильтр категорий</h2>
      <ul className='categories__list'>
        <li
          className='categories__list-item categories__list-item_active'>
            Роллы и суши
        </li>
        <li className='categories__list-item'>Сеты</li>
        <li className='categories__list-item'>WOK</li>
        <li className='categories__list-item'>Горячее и салаты</li>
        <li className='categories__list-item'>Детское меню</li>
        <li className='categories__list-item'>Фирменное меню</li>
      </ul>
    </section>
  );
}

export default Categories;
