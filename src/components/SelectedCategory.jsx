import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const SelectedCategory = React.memo(
    function SelectedCategory({items}) {
      const {category} = useSelector(({category}) => category);

      return (
        <section className='selected-category'>
          <h2 className='visually-hidden'>Выбранная категория</h2>
          <p className='selected-category__text'>{items[category]}</p>
        </section>
      );
    },
);

export default SelectedCategory;

SelectedCategory.propTypes = {
  items: PropTypes.array,
};
