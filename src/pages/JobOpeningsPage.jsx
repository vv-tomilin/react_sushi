import React from 'react';
import {Link} from 'react-router-dom';

function JobOpeningsPage() {
  return (
    <div className='job-openings-page'>
      <div className='job-openings-page__content-wrapper'>
        <h1 className='job-openings-page__title'>НАШИ ВАКАНСИИ</h1>
        <p className='job-openings-page__smile'>&#128577;</p>
        <p className='job-openings-page__text'>
          К сожалению на данный момент открытых вакансий нет...
        </p>
        <div className='job-openings-page__btn-back-wrapper'>
          <Link to='/'>
            <button className='cart__empty-btn-back'>
                Вернуться на главную
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobOpeningsPage;
