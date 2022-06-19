import React from 'react'
import {
  FaLaptop,
  FaBasketballBall,
  FaPencilAlt,
  FaPlane,
  FaQuidditch,
  FaBath,
  FaTshirt,
  FaTaxi,
  FaAirFreshener,
  FaBicycle,
  FaPaw,
  FaCouch,
  FaDumbbell,
  FaBook,
  FaGlassCheers,
  FaShoePrints,
  FaUmbrella,
  FaUserGraduate,
  FaRegAddressBook,
  FaBoxOpen,
} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'

function CategoryMenu() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 my-5">
      <Swiper
        rewind={true}
        slidesPerView={3}
        spaceBetween={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 10,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaBoxOpen />
            </figure>
            <div className="card-body py-0 px-1 text-xs">All</div>
            <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaGlassCheers />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Event</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaPencilAlt />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Stationery</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaRegAddressBook />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Notes</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaBook />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Books</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaUserGraduate />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Tutoring</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaTshirt />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Clothing</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaShoePrints />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Shoes</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaAirFreshener />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Accessary</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaBasketballBall />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Sports</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaDumbbell />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Fitness</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaQuidditch />
            </figure>
            <div className="card-body py-0 px-1 text-xs">FaQuidditch</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaUmbrella />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Umbrella</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaBath />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Bath/Cosmetics</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaCouch />
            </figure>
            <div className="card-body py-0 px-1 text-xs">IKIA</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaPlane />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Travel</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaLaptop />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Electronics</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaTaxi />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Cars</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaBicycle />
            </figure>
            <div className="card-body py-0 px-1 text-xs">RideButNotCar</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-1">
            <figure>
              <FaPaw />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Pet</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CategoryMenu
