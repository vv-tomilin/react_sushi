import React from 'react';
import PropTypes from 'prop-types';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper/core';

import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function DiscountsBanners({promoItems}) {
  return (
    <section className='discounts-bunners'>
      <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>

      <div className='discounts-bunners__swiper'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoHeight={false}
          autoplay={{
            'delay': 4500,
            'disableOnInteraction': false,
          }}
          pagination={{
            'clickable': true,
          }}
          navigation={false}
          className="mySwiper" >
          {
            promoItems && promoItems.map((obj) => (
              <SwiperSlide key={obj.id}>
                <div className='discounts-bunners__bunner-item'>
                  <img
                    className='discounts-bunners__bunner-mob'
                    src={obj.promoURL} alt='' />
                  <img
                    className='discounts-bunners__bunner-desktop'
                    src={obj.promoURL} alt='' />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
}

export default DiscountsBanners;

DiscountsBanners.propTypes = {
  promoItems: PropTypes.array.isRequired,
};
