import React from 'react';

import bannerMob from '../assets/images/banner_mob.jpg';

function DiscountsBanners() {
  return (
    <section>
      <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>
      <img src={bannerMob} />
      <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </section>
  );
}

export default DiscountsBanners;
