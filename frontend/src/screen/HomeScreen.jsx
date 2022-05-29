import CategoryMenu from '../components/CategoryMenu'
import profile from '../static/images/profile.PNG'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

function HomeScreen() {
  return (
    <>
      <CategoryMenu />
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="card w-full">
            <figure className="h-36">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next-card',
                  prevEl: '.swiper-button-prev-card',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://api.lorem.space/image/car?w=800&h=600&hash=225E6693" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://api.lorem.space/image/car?w=800&h=600&hash=500B67FB" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://api.lorem.space/image/car?w=800&h=600&hash=A89D0DE6" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://api.lorem.space/image/car?w=800&h=600&hash=8B7BCDC2" />
                </SwiperSlide>
              </Swiper>
            </figure>
            <div className="py-4 px-0 card-body h-1/2 text-xs">
              <div className="grid grid-cols-3 gap-3 justify-items-end">
                <div className="col-span-2 grid grid-rows-2">
                  <div>
                    <strong className="w-full text-xs">
                      Sonata Full Option 2007
                    </strong>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-full badge badge-outline text-xs">
                      <strong>$2000</strong>
                    </div>
                    <div className="w-full badge badge-outline text-xs">
                      <strong>10Years</strong>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <img
                    className="mask mask-squircle"
                    src={profile}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
