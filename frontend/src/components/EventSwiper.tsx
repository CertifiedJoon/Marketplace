import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Navigation } from 'swiper'
import EventCard from './EventCard'
import { LiveEvent } from '../interface/itemInterface'

type Props = {
  events: Array<LiveEvent>
}

function EventSwiper({ events }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {events.map((event, i) => (
          <SwiperSlide key={i}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default EventSwiper
