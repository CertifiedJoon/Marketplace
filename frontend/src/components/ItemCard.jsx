import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import profile from '../static/images/profile.PNG'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/lazy'
import LazySwiper from './LazySwiper'

function ItemCard() {
  return (
    <LazyLoad height={200} once>
      <Link to="/productId">
        <div className="card item-card w-full">
          <figure className="w-full vh25">
            <LazySwiper containImg={false} />
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
