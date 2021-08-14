import React from 'react';
import PropTypes from 'prop-types';

const FilterPopup = React.memo(
    function FilterPopup({
      sortRef,
      items,
      activeSortType,
      onClickSortType,
      setVisiblePopup,
    }) {
      const onSelectItem = React.useCallback((index) => {
        if (onClickSortType) {
          onClickSortType(index);
          setVisiblePopup(false);
        }
      });
      return (
        <div
          className='filter-popup'
          ref={sortRef} >
          <ul>
            {items && items.map((obj, index) => (
              <li
                key={index}
                className={activeSortType === obj.type ?
              'filter-popup__item filter-popup__item_active' :
              'filter-popup__item'}
                onClick={() => onSelectItem(obj)} >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      );
    },
);

export default FilterPopup;

FilterPopup.propTypes = {
  sortRef: PropTypes.any,
  items: PropTypes.array,
  activeSortType: PropTypes.string,
  onClickSortType: PropTypes.func,
  setVisiblePopup: PropTypes.func,
};
