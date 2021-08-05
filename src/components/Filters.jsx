import React from 'react';
import PropTypes from 'prop-types';

import {FilterPopup} from './Modals';

import {
  filterIcon,
  filterArrow,
} from '../assets/logo and icons';

function Filters({activeSortType, items, onClickSortType}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const filterBlockRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current) &&
        !path.includes(filterBlockRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <section ref={filterBlockRef} className="filters__section">
      <h2 className='visually-hidden'>Фильтры и сортировка</h2>
      <div
        className="filters"
        onClick={toggleVisiblePopup} >
        <img
          className='filters__icon'
          src={filterIcon} alt='filter_icon'
          width='22' height='19'/>
        <p className='filters__text'>Сортировка:&#8195;</p>
        <span
          className='filters__text'
          onClick={toggleVisiblePopup}>
          {activeLabel}
        </span>
        <img
          className='filters__arrow'
          src={filterArrow} alt=''
          width='14' height='9'/>
      </div>
      {
        visiblePopup &&
        <FilterPopup
          sortRef={sortRef}
          items={items}
          activeSortType={activeSortType}
          onClickSortType={onClickSortType}
          setVisiblePopup={setVisiblePopup} />
      }
    </section>
  );
}

export default Filters;

Filters.propTypes = {
  activeSortType: PropTypes.string,
  items: PropTypes.array,
  onClickSortType: PropTypes.func,
};
