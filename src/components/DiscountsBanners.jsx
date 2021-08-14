import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, EffectFade} from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const DiscountsBanners = React.memo(
    function DiscountsBanners({promoItems}) {
      return (
        <section className='discounts-bunners'>
          <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>

          <div className='discounts-bunners__swiper'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              effect={'fade'}
              autoHeight={false}
              autoplay={{
                'delay': 3000,
                'disableOnInteraction': false,
              }}
              pagination={{
                'clickable': true,
              }}
              navigation={false}
              className="mySwiper" >
              {
                promoItems && promoItems.map((obj) => (
                  <SwiperSlide
                    key={obj.id}>
                    <Link to='/promos-info-page'>
                      <div className='discounts-bunners__bunner-item'>
                        <img
                          className='discounts-bunners__bunner-mob'
                          src={obj.promoURL} alt='' />
                        <img
                          className='discounts-bunners__bunner-desktop'
                          src={obj.promoURL} alt='' />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </section>
      );
    },
);

export default DiscountsBanners;

DiscountsBanners.propTypes = {
  promoItems: PropTypes.array.isRequired,
};
