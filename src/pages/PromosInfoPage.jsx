import React from 'react';

import {Link} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {fetchPromo} from '../redux/actions/promo';

import {PromoItem} from '../components/';

function PromosInfoPage() {
  const {promoItems} = useSelector(({promo}) => promo);

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchPromo(dispatch);
  }, []);

  return (
    <div className='promos-info-page'>
      <ul className='promos-info-page__list'>
        {
          promoItems.map((obj) => (
            <li
              className='promos-info-page__item'
              key={obj.id} >
              <PromoItem
                imageURL={obj.promoURL}
                description={obj.description} />
            </li>
          ))
        }
      </ul>
      <div className='promos-info-page__btn-back-wrapper'>
        <Link to='/'>
          <button className='promos-info-page__btn-back'>
            &#128293; На главную
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PromosInfoPage;
