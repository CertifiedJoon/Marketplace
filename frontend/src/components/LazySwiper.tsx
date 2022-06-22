import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Lazy } from 'swiper'

import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import nextSvg from '../static/images/circle-right.svg'
import prevSvg from '../static/images/circle-left.svg'

type Props = {
  containImg: boolean
}

function LazySwiper({ containImg }: Props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-card',
          prevEl: '.swiper-button-prev-card',
        }}
        modules={[Lazy, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://api.lorem.space/image/movie?w=800&h=800"
            className={`swiper-lazy ${containImg && 'containImg'}`}
            alt=""
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://api.lorem.space/image/movie?w=800&h=1000"
            className={`swiper-lazy ${containImg && 'containImg'}`}
            alt=""
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://api.lorem.space/image/book?w=800&h=1600"
            className={`swiper-lazy ${containImg && 'containImg'}`}
            alt=""
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://api.lorem.space/image/furniture?w=800&h=300"
            className={`swiper-lazy ${containImg && 'containImg'}`}
            alt=""
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <div className="swiper-button-prev-card">
          <button className="absolute btn btn-circle btn-ghost left-0">
            <img
              src={prevSvg}
              alt="prev"
              className="swiper-arrow-card swiper-arrow-prev-card"
            />
          </button>
        </div>
        <div className="swiper-button-next-card">
          <button className="absolute btn btn-circle btn-ghost right-0">
            <img
              src={nextSvg}
              alt="next"
              className="swiper-arrow-card swiper-arrow-next-card"
            />
          </button>
        </div>
      </Swiper>
    </>
  )
}

export default LazySwiper
