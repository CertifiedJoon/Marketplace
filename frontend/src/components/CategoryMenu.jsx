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
} from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

function CategoryMenu() {
  return (
    <div className="container mx-auto">
      <Swiper
        rewind={true}
        slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <ul class="menu menu-horizontal bg-base-100 rounded-box">
        <li>
          <div className="card py-1">
            <figure>
              <FaGlassCheers />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Events</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaPencilAlt />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Stationery</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaRegAddressBook />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Notes</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaBook />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Books</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaUserGraduate />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Tutoring</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaTshirt />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Clothing</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaShoePrints />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Shoes</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaAirFreshener />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Accessary</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaBasketballBall />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Sports</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaDumbbell />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Fitness</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaQuidditch />
            </figure>
            <div className="card-body py-0 px-1 text-xs">FaQuidditch</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaUmbrella />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Umbrella</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaBath />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Bath/Cosmetics</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaCouch />
            </figure>
            <div className="card-body py-0 px-1 text-xs">IKIA</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaPlane />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Travel</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaLaptop />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Electronics</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaTaxi />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Cars</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaBicycle />
            </figure>
            <div className="card-body py-0 px-1 text-xs">RideButNotCars</div>
          </div>
        </li>
        <li>
          <div className="card py-1">
            <figure>
              <FaPaw />
            </figure>
            <div className="card-body py-0 px-1 text-xs">Pet</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CategoryMenu
