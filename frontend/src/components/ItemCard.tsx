import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/lazy'

import LazySwiper from './LazySwiper'
import profile from '../static/images/profile.png'
import PlaceholderCard from './PlaceholderCard'
import { Badge } from '../interface/badgeInterface'
import BriefBadge from './BriefBadge'

interface CardDetail {
  _id: string
  type: string
  heading: string
  sub_heading: string
  thumbnail: Array<string>
  price: number
  profile: string
  badges: Array<Badge>
}

type Props = {
  cardDetail: CardDetail
}

function ItemCard({ cardDetail }: Props) {
  return (
    <LazyLoad height={200} once offset={-100} placeholder={<PlaceholderCard />}>
      <Link to={`/item/${cardDetail._id}`}>
        <div className="card item-card w-full">
          <figure>
            <div className="figure-container">
              <div className="figure">
                <LazySwiper images={cardDetail.thumbnail} containImg={false} />
              </div>
            </div>
          </figure>
          <div className="py-2 px-0 card-body h-1/2 text-xs">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 justify-start">
                <div>
                  <strong className="w-full text-lg lg:text-xs">
                    {cardDetail.heading}
                  </strong>
                </div>
                <div className="w-full my-1 text-lg lg:text-xs text-gray-500 truncate">
                  {cardDetail.sub_heading}
                </div>
                <div className="w-full my-1 text-lg lg:text-xs text-gray-500">
                  {Number(cardDetail.price) === 0 ? (
                    <div className="badge badge-sm badge-outline badge-info">
                      free
                    </div>
                  ) : (
                    `$${cardDetail.price}`
                  )}
                </div>
              </div>
              <div className="col-span-1 relative py-1 pl-6 xl:pl-3 flex justify-end">
                <div className="avatar">
                  <div className="w-20 lg:w-16 rounded-xl">
                    <img
                      src={cardDetail.profile}
                      alt="Profile"
                      className="mask mask-squircle"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0">
                  <BriefBadge
                    badges={cardDetail.badges}
                    type={cardDetail.type}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </LazyLoad>
  )
}

export default ItemCard
