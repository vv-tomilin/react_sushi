import React from 'react';
import PropTypes from 'prop-types';

function Categories({items, activeCategory, onClickCategory}) {
  return (
    <section className='categories'>
      <h2 className='visually-hidden'>Фильтр категорий</h2>
      <ul className='categories__list'>
        {
          items && items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              onClick={() => onClickCategory(index)}
              className={activeCategory === index ?
              'categories__list-item categories__list-item_active' :
              'categories__list-item'}>
              {name}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Categories;

Categories.propTypes = {
  items: PropTypes.array.isRequired,
  activeCategory: PropTypes.number.isRequired,
  onClickCategory: PropTypes.func,
};
