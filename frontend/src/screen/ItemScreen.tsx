import React from 'react'
import { FaHandSparkles, FaHeart, FaMedal, FaShare } from 'react-icons/fa'
import LazySwiper from '../components/LazySwiper'
import PhotoGallery from '../components/PhotoGallery'
import profile from '../static/images/profile.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import PublicProfile from '../components/PublicProfile'

function ItemScreen() {
  /* 
    Frontend worklist:
    1. All links should be wrapped with react Link
    2. Save and share button must do its functions
    3. Labels & product details must be taken from a item state (redux)
    4. Gallery and Swiper must be take files from a item state (redux)
    5. Community hero must be taken from a community state (redux)
    6. Seller Description must be taken from a item state (redux)
    7. Price must be calculated by state management (redux)
  */
  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        {/* Mobile */}

        <div className="lg:hidden">
          <div className="vh40 relative">
            <LazySwiper containImg={true} />
            <div className="bg-transparent absolute bottom-0 left-auto z-40">
              <label
                htmlFor="my-modal-2"
                className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
              >
                Show all photos
              </label>
            </div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <PhotoGallery />
                <div className="modal-action bg-inherit">
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-sm btn-active btn-ghost"
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3 py-3">
            <h3 className="text-2xl my-3">
              <strong>Nimbus 2000 Taken From Set</strong>
            </h3>
            <div className="divide-y divide-gray-300">
              <p className="text-sm text-gray-500 mb-1">Nimbus 2000</p>
              <div className="grid grid-cols-4">
                <div className="col-span-1 justify-self-start max-h-20 py-3 pr-3">
                  <label
                    htmlFor="my-modal-profile-mobile"
                    className="btn modal-button btn-ghost btn-square btn-lg"
                  >
                    <img
                      src={profile}
                      alt="profile"
                      className="mask mask-squircle"
                    />
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-profile-mobile"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom">
                    <div className="modal-box">
                      <PublicProfile />
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-profile-mobile"
                          className="btn btn-primary"
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 justify-self-end text-md py-3 text-gray-500">
                  I am selling because I've graduated Hogwarts!
                </div>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">Bought On</label>
                <p className="mb-1">25th, December, 1982</p>
                <label className="text-sm text-gray-500">Brand</label>
                <p className="mb-1">The Nimbus Broom Racing Company</p>
                <label className="text-sm text-gray-500">Condition</label>
                <p className="mb-1">Almost Unusable</p>
                <label className="text-sm text-gray-500">
                  Frequency of Use
                </label>
                <p className="mb-1">
                  Used every week during Quidditch Training.
                </p>
                <label className="text-sm text-gray-500">Description</label>
                <p>
                  "One of the Nimbus Racing Broom Company's most successful
                  models. Highly reliable with good speed and exceptional
                  handling — not for beginners!"
                </p>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">
                  Joon's Record &nbsp;
                  <div
                    className="tooltip tooltip-info"
                    data-tip="100% Clean Transactions"
                  >
                    <div className="badge badge-info badge-outline mr-1">
                      <FaHandSparkles />
                      &nbsp;Clean
                    </div>
                  </div>
                  <div
                    className="tooltip tooltip-success"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-success badge-outline mr-1">
                      <FaMedal />
                      &nbsp;PowerUser
                    </div>
                  </div>
                </label>
                <div className="flex stats shadow mt-2">
                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Purchase</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Sale</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden sticky bottom-0 z-50 border-t py-3 bg-white">
          <div className="grid grid-cols-3 px-3">
            <div className="col-span-2">
              <p>
                <span className="text-gray-500">Listed At</span> $4000
              </p>
              <div className="badge badge-secondary">Negotiable</div>
              <button className="btn btn-xs rounded btn-ghost text-sm">
                <FaHeart
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: 'hsl(var(--sf))',
                  }}
                />
              </button>
              &nbsp;
              <button className="btn btn-xs rounded btn-ghost text-sm">
                <FaShare
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                  }}
                />
              </button>
            </div>
            <div className="col-span-1">
              <Link to="/message/chatId">
                <button className="btn btn-primary btn-md w-full">
                  Chat & Buy
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Laptop */}

        <div className="hidden lg:block">
          <div className="grid grid-cols-5 my-4">
            <div className="col-span-4">
              <h1>
                <strong>Nimbus 2000 Stolen From Set</strong>
              </h1>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-0">
                <button className="btn rounded btn-ghost text-xs px-0">
                  <FaHeart
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      color: 'hsl(var(--sf))',
                    }}
                  />
                  &nbsp;Save
                </button>
                <button className="btn rounded btn-ghost text-xs px-0">
                  <FaShare
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                    }}
                  />
                  &nbsp;Share
                </button>
              </div>
            </div>
          </div>
          <div className="vh50 relative">
            <div className="grid grid-cols-5 gap-2 h-full">
              <div
                className="col-span-3 bg-cover bg-no-repeat bg-center rounded-l-xl"
                style={{
                  backgroundImage: `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                    )`,
                }}
              ></div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                      'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                      )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                      'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                      )`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-tr-xl"
                    style={{
                      backgroundImage: `url(
                      'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                      )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl"
                    style={{
                      backgroundImage: `url(
                      'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                      )`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent absolute bottom-0 left-auto z-40">
                <label
                  htmlFor="my-modal-5"
                  className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
                >
                  Show all photos
                </label>
              </div>
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <PhotoGallery />
                  <div className="modal-action bg-inherit">
                    <label
                      htmlFor="my-modal-5"
                      className="btn btn-sm btn-active btn-ghost"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5  border-b border-gray-300">
            <div className="col-span-2 pr-5">
              <div className="grid grid-rows-7 divide-y divide-gray-300">
                <div className="row-span-1 py-5">
                  {/* One liner Description & reason for sale & profile pic */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 justify-start">
                      <div>
                        <h1 className="w-full text-2xl">
                          Nimbus Full Option 2007
                        </h1>
                      </div>
                      <div className="w-full my-1 text-lg text-gray-500">
                        I am selling because I've graduated Hogwarts!
                      </div>
                    </div>
                    <div className="col-span-1 justify-content-end">
                      <img
                        src={profile}
                        alt="profile"
                        className="w-1/2 mask mask-squircle ml-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-sm text-gray-500">Bought On</label>
                  <p className="mb-1">25th, December, 1982</p>
                  <label className="text-sm text-gray-500">Brand</label>
                  <p className="mb-1">The Nimbus Broom Racing Company</p>
                  <label className="text-sm text-gray-500">Condition</label>
                  <p className="mb-1">Almost Unusable</p>
                  <label className="text-sm text-gray-500">
                    Frequency of Use
                  </label>
                  <p className="mb-1">
                    Used every week during Quidditch Training.
                  </p>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-lg text-gray-500 mb-2">
                    Description
                  </label>
                  <p>
                    "One of the Nimbus Racing Broom Company's most successful
                    models. Highly reliable with good speed and exceptional
                    handling — not for beginners!"
                  </p>
                  <p>
                    The Nimbus 2000 was a broomstick produced by the Nimbus
                    Racing Broom Company as part of their successful line of
                    racing brooms. At the time of its release in 1991, it was
                    the fastest broomstick in production. The Nimbus 2000 easily
                    outperformed its competitors on the Quidditch pitch until it
                    was replaced as the top broomstick by the Nimbus 2001.
                  </p>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-lg text-gray-500 mb-5">
                    Seller Description &nbsp;
                    <div
                      className="tooltip tooltip-info"
                      data-tip="100% Clean Transactions"
                    >
                      <div className="badge badge-info badge-outline mr-1">
                        <FaHandSparkles />
                        &nbsp;Clean
                      </div>
                    </div>
                    <div
                      className="tooltip tooltip-success"
                      data-tip="Sold and Bought 10 items"
                    >
                      <div className="badge badge-success badge-outline mr-1">
                        <FaMedal />
                        &nbsp;PowerUser
                      </div>
                    </div>
                  </label>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Items Bought</div>
                      <div className="stat-value text-primary">25.6K</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Items Sold</div>
                      <div className="stat-value text-secondary">2.6M</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <div className="avatar online">
                          <div className="w-16 rounded-full">
                            <label
                              htmlFor="my-modal-profile"
                              className="btn modal-button btn-ghost btn-square btn-lg"
                            >
                              <img
                                src={profile}
                                alt="profile"
                                className="mask mask-circle"
                              />
                            </label>

                            <input
                              type="checkbox"
                              id="my-modal-profile"
                              className="modal-toggle"
                            />
                            <div className="modal modal-middle">
                              <div className="modal-box">
                                <PublicProfile />
                                <div className="modal-action">
                                  <label
                                    htmlFor="my-modal-profile"
                                    className="btn btn-primary"
                                  >
                                    Close
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="stat-value">86</div>
                      <div className="stat-title">Transaction</div>
                      <div className="stat-desc text-secondary">
                        100% Clean Transaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="sticky top-20 z-40">
                <div
                  className="card w-full
                bg-white border shadow-xl ml-auto"
                >
                  <div className="card-body">
                    <div className="grid grid-cols-3">
                      <div className="col-span-2">
                        <h2 className="card-title">
                          <span className="text-gray-500">Listed At</span> $4000
                        </h2>
                      </div>
                      <div className="col-span-1">
                        <div className="badge badge-secondary">Negotiable</div>
                      </div>
                    </div>
                    <div className="card-actions justify-stretch">
                      <Link to="/message/chatId" className="w-full">
                        <button className="btn btn-primary w-full">
                          Chat & Buy
                        </button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-5 border-b border-gray-300">
                      <div className="col-span-3">
                        <p className="underline">Product Price</p>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <p className="mb-1">$4000</p>
                      </div>
                      <div className="col-span-3">
                        <p className="underline">Marketplace Fee</p>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <p className="mb-1">$10</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <strong className="underline">Total</strong>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <strong className="mb-1">$4010</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero min-h-full rounded-2xl"
            style={{
              backgroundImage: `url(
              'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg'
              )`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">HKU</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link to="/">
                  <button className="btn btn-primary">Explore Community</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ItemScreen
