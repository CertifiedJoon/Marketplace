import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import LazyLoad from 'react-lazyload'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import profile from '../static/images/profile.PNG'
import nextSvg from '../static/images/circle-right.svg'
import prevSvg from '../static/images/circle-left.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function ItemCard() {
  return (
    <LazyLoad height={200} once>
      <Link to="/productId">
        <div className="card item-card w-full">
          <figure>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-card',
                prevEl: '.swiper-button-prev-card',
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://api.lorem.space/image/car?w=800&h=800&hash=225E6693"
                  alt="item"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://api.lorem.space/image/car?w=800&h=800&hash=500B67FB"
                  alt="item"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://api.lorem.space/image/car?w=800&h=800&hash=A89D0DE6"
                  alt="item"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2"
                  alt="item"
                />
              </SwiperSlide>
              <div className="swiper-button-prev-card w-4 h-4 left-2 bottom-2">
                <button className="absolute btn btn-circle btn-ghost left-0">
                  <img
                    src={prevSvg}
                    alt="prev"
                    className="swiper-arrow-card swiper-arrow-prev-card"
                  />
                </button>
              </div>
              <div className="swiper-button-next-card w-4 h-4 right-2 bottom-2">
                <button className="absolute btn btn-circle btn-ghost right-0">
                  <img
                    src={nextSvg}
                    alt="next"
                    className="swiper-arrow-card swiper-arrow-next-card"
                  />
                </button>
              </div>
            </Swiper>
          </figure>
          <div className="py-2 px-0 card-body h-1/2 text-xs">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 justify-start">
                <div>
                  <strong className="w-full text-lg lg:text-xs">
                    Sonata Full Option 2007
                  </strong>
                </div>
                <div className="w-full my-1 text-lg lg:text-xs text-gray-500">
                  One Liner Desc
                </div>
                <div className="w-full my-1 text-lg lg:text-xs text-gray-500">
                  $2000
                </div>
              </div>
              <div className="col-span-1 justify-end py-1 pl-6 xl:pl-3">
                <img
                  src={profile}
                  alt="profile"
                  className="mask mask-squircle"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </LazyLoad>
  )
}

export default ItemCard
