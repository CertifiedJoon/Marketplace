import React from 'react'
import {
  FaLaptop,
  FaBasketballBall,
  FaPencilAlt,
  FaPlane,
  FaQuidditch,
  FaBath,
  FaTshirt,
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

type Props = {
  activeType: string | undefined
}

function CategoryMenu({ activeType }: Props) {
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
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide>
          <Link to="/">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaBoxOpen />
                </figure>
                <div className="card-body py-0 px-1 text-xs">All</div>
                {activeType === 'all' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/event">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaGlassCheers />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Event</div>
                {activeType === 'event' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/stationery">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaPencilAlt />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Stationery</div>
                {activeType === 'stationery' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/note">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaRegAddressBook />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Note</div>
                {activeType === 'note' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/book">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaBook />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Book</div>
                {activeType === 'book' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/tutoring">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaUserGraduate />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Tutoring</div>
                {activeType === 'tutoring' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/clothing">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaTshirt />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Clothing</div>
                {activeType === 'clothing' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/shoes">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaShoePrints />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Shoes</div>
                {activeType === 'shoes' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/accessary">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaAirFreshener />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Accessary</div>
                {activeType === 'accessary' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/sports">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaBasketballBall />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Sports</div>
                {activeType === 'sports' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/fitness">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaDumbbell />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Fitness</div>
                {activeType === 'fitness' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/quidditch">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaQuidditch />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Quidditch</div>
                {activeType === 'quidditch' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/umbrella">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaUmbrella />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Umbrella</div>
                {activeType === 'umbrella' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/bath-cosmetics">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaBath />
                </figure>
                <div className="card-body py-0 px-1 text-xs">
                  Bath/Cosmetics
                </div>
                {activeType === 'bath-cosmetics' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/ikia">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaCouch />
                </figure>
                <div className="card-body py-0 px-1 text-xs">IKIA</div>
                {activeType === 'ikia' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/travel">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaPlane />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Travel</div>
                {activeType === 'travel' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/electronics">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaLaptop />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Electronics</div>
                {activeType === 'electronics' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/ridebutnotcar">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaBicycle />
                </figure>
                <div className="card-body py-0 px-1 text-xs">RideButNotCar</div>
                {activeType === 'ridebutnotcar' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/explore/pet">
            <button className="btn btn-ghost">
              <div className="card py-1">
                <figure>
                  <FaPaw />
                </figure>
                <div className="card-body py-0 px-1 text-xs">Pet</div>
                {activeType === 'pet' && (
                  <hr className="w-1/2 mx-auto bg-primary border border-t-2 border-primary rounded" />
                )}
              </div>
            </button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CategoryMenu
