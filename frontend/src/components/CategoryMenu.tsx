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
import { Link } from 'react-router-dom'
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
          <Link to="/">
            <div className="card py-1">
              <figure>
                <FaBoxOpen />
              </figure>
              <div className="card-body py-0 px-1 text-xs">All</div>
              <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/event">
            <div className="card py-1">
              <figure>
                <FaGlassCheers />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Event</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/stationary">
            <div className="card py-1">
              <figure>
                <FaPencilAlt />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Stationery</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/note">
            <div className="card py-1">
              <figure>
                <FaRegAddressBook />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Note</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/book">
            <div className="card py-1">
              <figure>
                <FaBook />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Book</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/tutoring">
            <div className="card py-1">
              <figure>
                <FaUserGraduate />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Tutoring</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/clothing">
            <div className="card py-1">
              <figure>
                <FaTshirt />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Clothing</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/shoes">
            <div className="card py-1">
              <figure>
                <FaShoePrints />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Shoes</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/accessary">
            <div className="card py-1">
              <figure>
                <FaAirFreshener />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Accessary</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/sports">
            <div className="card py-1">
              <figure>
                <FaBasketballBall />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Sports</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/fitness">
            <div className="card py-1">
              <figure>
                <FaDumbbell />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Fitness</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/quidditch">
            <div className="card py-1">
              <figure>
                <FaQuidditch />
              </figure>
              <div className="card-body py-0 px-1 text-xs">FaQuidditch</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/umbrella">
            <div className="card py-1">
              <figure>
                <FaUmbrella />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Umbrella</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/bath">
            <div className="card py-1">
              <figure>
                <FaBath />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Bath/Cosmetics</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/IKIA">
            <div className="card py-1">
              <figure>
                <FaCouch />
              </figure>
              <div className="card-body py-0 px-1 text-xs">IKIA</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/travel">
            <div className="card py-1">
              <figure>
                <FaPlane />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Travel</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/electronics">
            <div className="card py-1">
              <figure>
                <FaLaptop />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Electronics</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/cars">
            <div className="card py-1">
              <figure>
                <FaTaxi />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Cars</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/ridebutnotcar">
            <div className="card py-1">
              <figure>
                <FaBicycle />
              </figure>
              <div className="card-body py-0 px-1 text-xs">RideButNotCar</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/pet">
            <div className="card py-1">
              <figure>
                <FaPaw />
              </figure>
              <div className="card-body py-0 px-1 text-xs">Pet</div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CategoryMenu
