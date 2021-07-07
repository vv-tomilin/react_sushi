import React from 'react';

import {
  filterIcon,
  filterArrow,
} from '../assets/logo and icons';

function Filters() {
  return (
    <section>
      <h2 className='visually-hidden'>Фильтры и сортировка</h2>
      <dif className="filters">
        <img src={filterIcon} alt='filter_icon' width='22' height='19'/>
        <p className='filters__text'>Фильтры и сортировка</p>
        <img src={filterArrow} alt='' width='14' height='9'/>
      </dif>
    </section>
  );
}

export default Filters;
