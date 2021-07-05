import React from 'react';

import {
  filterIcon,
  filterArrow,
} from '../assets/logo and icons';

function Filters() {
  return (
    <section>
      <h2>Фильтры и сортировка</h2>
      <img src={filterIcon} alt='filter_icon' />
      <p>Фильтры и сортировка</p>
      <img src={filterArrow} />
    </section>
  );
}

export default Filters;
