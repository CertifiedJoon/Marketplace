import React, { useEffect, useState } from 'react'
import { FaHandSparkles, FaHeart, FaMedal, FaShare } from 'react-icons/fa'
import LazySwiper from '../components/LazySwiper'
import PhotoGallery from '../components/PhotoGallery'
import profile from '../static/images/profile.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

type Props = {
  itemType: string
}

function EventScreen({ itemType }: Props) {
  /*
    Frontend Worklist:
    1. When Redux is set up, migrate this page to ItemScreen for dynamic rendering
  */

  const [copySuccess, setCopySuccess] = useState(false)

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
  }

  const handleLike = () => {
    toast.success('Item saved.')
  }

  useEffect(() => {
    if (copySuccess === true) toast.success('Link copied.')
  }, [copySuccess])

  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 my-4">
            <div className="col-span-4">
              <h1>
                <strong>Quidditch Practice</strong>
              </h1>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-0">
                <button
                  className="btn rounded btn-ghost text-xs px-0"
                  onClick={handleLike}
                >
                  <FaHeart
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      color: 'hsl(var(--sf))',
                    }}
                  />
                  &nbsp;Save
                </button>
                <button
                  className="btn rounded btn-ghost text-xs px-0"
                  onClick={handleShare}
                >
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
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                }}
              ></div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
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
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl"
                    style={{
                      backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
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
                          Gryffindor Quidditch Practice
                        </h1>
                      </div>
                      <div className="w-full my-1 text-lg text-gray-500">
                        A bi-weekly practice.
                      </div>
                    </div>
                    <div className="col-span-1 justify-content-end">
                      <Link to="/public-profile/userId">
                        <img
                          src={profile}
                          alt="profile"
                          className="w-1/2 mask mask-squircle ml-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-sm text-gray-500">Event Date</label>
                  <p className="mb-1">25th, December, 1982</p>
                  <label className="text-sm text-gray-500">Location</label>
                  <p className="mb-1">Hogwarts Quidditch Stadium</p>
                  <label className="text-sm text-gray-500">
                    Event Capacity
                  </label>
                  <p className="mb-1">50</p>
                  <label className="text-sm text-gray-500">Condition</label>
                  <p className="mb-1">You must be gryffindor.</p>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-lg text-gray-500 mb-2">
                    Description
                  </label>
                  <p>
                    "Quidditch, the most popular sport in the magical world –
                    highly dangerous, very exciting and played on broomsticks."
                  </p>
                  <p>
                    The object of the game was to score more points than your
                    opponents. Each goal was worth ten points and catching the
                    Golden Snitch was worth one-hundred and fifty points. The
                    game ended when the Snitch was caught or an agreement was
                    reached between the captains of both teams. Some games could
                    go on for many days if the Snitch was not caught (the
                    record, according to Quidditch Through the Ages, was six
                    months, although no one caught the Snitch).
                  </p>
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-lg text-gray-500 mb-5">
                    Host Description &nbsp;
                    <div
                      className="tooltip tooltip-info"
                      data-tip="Hosted 100 people"
                    >
                      <div className="badge badge-info badge-outline mr-1">
                        <FaHandSparkles />
                        &nbsp;Celebrity
                      </div>
                    </div>
                    <div
                      className="tooltip tooltip-success"
                      data-tip="Hosted 10 events"
                    >
                      <div className="badge badge-success badge-outline mr-1">
                        <FaMedal />
                        &nbsp;PowerHost
                      </div>
                    </div>
                  </label>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Events Hosted</div>
                      <div className="stat-value text-primary">25.6K</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">People Hosted</div>
                      <div className="stat-value text-secondary">2.6M</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <div className="avatar online">
                          <div className="w-16 rounded-full">
                            <img
                              src="https://api.lorem.space/image/face?w=128&h=128"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="stat-value">86</div>
                      <div className="stat-title">Events Rated At</div>
                      <div className="stat-desc text-secondary">
                        100% Clean Events
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
                          <span className="text-gray-500">Joining Fee</span> $4
                        </h2>
                      </div>
                      <div className="col-span-1">
                        <div className="badge badge-secondary">
                          Unnegotiable
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-stretch">
                      <button className="btn btn-primary w-full">Join</button>
                    </div>
                    <div className="grid grid-cols-5 border-b border-gray-300">
                      <div className="col-span-3">
                        <p className="underline">Event Fee</p>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <p className="mb-1">$4</p>
                      </div>
                      <div className="col-span-3">
                        <p className="underline">Marketplace Fee</p>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <p className="mb-1">$0</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <strong className="underline">Total</strong>
                      </div>
                      <div className="col-span-2 justify-self-end">
                        <strong className="mb-1">$4</strong>
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
        <div className="lg:hidden">
          <div className="vh40">
            <LazySwiper containImg={true} />
          </div>
          <div className="mx-3 py-3">
            <h3 className="text-2xl my-3">
              <strong>Quidditch Practice</strong>
            </h3>
            <div className="divide-y divide-gray-300">
              <div className="grid grid-cols-5">
                <div className="col-span-3">
                  <p className="text-sm text-gray-500">
                    Gryffindor Quidditch Practice
                  </p>
                </div>
                <div className="col-span-2 justify-self-end">
                  <button
                    className="btn btn-xs rounded btn-ghost text-xs px-0"
                    onClick={handleLike}
                  >
                    <FaHeart
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        color: 'hsl(var(--sf))',
                      }}
                    />
                    &nbsp;Save
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-xs rounded btn-ghost text-xs px-0"
                    onClick={handleShare}
                  >
                    <FaShare
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                      }}
                    />
                    &nbsp;Share
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 justify-self-start max-h-20 py-3 pr-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="mask mask-squircle"
                  />
                </div>
                <div className="col-span-3 justify-self-end text-md py-3 text-gray-500">
                  Bi-weekly practice.
                </div>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">Event Date</label>
                <p className="mb-1">25th, December, 1982</p>
                <label className="text-sm text-gray-500">Location</label>
                <p className="mb-1">Hogwarts Quidditch Stadium</p>
                <label className="text-sm text-gray-500">Event Capacity</label>
                <p className="mb-1">50</p>
                <label className="text-sm text-gray-500">Condition</label>
                <p className="mb-1">You must be gryffindor.</p>
                <label className="text-lg text-gray-500 mb-2">
                  Description
                </label>
                <p>
                  "Quidditch, the most popular sport in the magical world –
                  highly dangerous, very exciting and played on broomsticks."
                </p>
                <p>
                  The object of the game was to score more points than your
                  opponents. Each goal was worth ten points and catching the
                  Golden Snitch was worth one-hundred and fifty points. The game
                  ended when the Snitch was caught or an agreement was reached
                  between the captains of both teams. Some games could go on for
                  many days if the Snitch was not caught (the record, according
                  to Quidditch Through the Ages, was six months, although no one
                  caught the Snitch).
                </p>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">
                  Host Description &nbsp;
                  <div
                    className="tooltip tooltip-info"
                    data-tip="Hosted 100 people"
                  >
                    <div className="badge badge-info badge-outline mr-1">
                      <FaHandSparkles />
                      &nbsp;Celebrity
                    </div>
                  </div>
                  <div
                    className="tooltip tooltip-success"
                    data-tip="Hosted 10 events"
                  >
                    <div className="badge badge-success badge-outline mr-1">
                      <FaMedal />
                      &nbsp;PowerHost
                    </div>
                  </div>
                </label>
                <div className="flex stats shadow mt-2">
                  <div className="stat place-items-center">
                    <div className="stat-title">Events Hosted</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-title">People Hosted</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>
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
              <span className="text-gray-500">Joining Fee</span> $4
            </p>
            <div className="badge badge-secondary">Unnegotiable</div>
          </div>
          <div className="col-span-1">
            <button className="btn btn-primary btn-md w-full">
              Chat & Join
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventScreen
