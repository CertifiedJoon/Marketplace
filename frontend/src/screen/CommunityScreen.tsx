import React from 'react'
import { useParams } from 'react-router-dom'

import profile from '../static/images/profile.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaHandSparkles, FaMedal } from 'react-icons/fa'
import EventSwiper from '../components/EventSwiper'
function CommunityScreen() {
  //eslint-disable-next-line
  const params = useParams()

  const followEvent = () => {
    console.log('Event followed')
  }

  const followItem = () => {
    console.log('Item followed')
  }

  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div
          className="hero min-h-full rounded"
          style={{
            backgroundImage: `url(
              'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg'
              )`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">HKU</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-bold inline-block">Events</h1>
          <div className="badge badge-outline badge-lga ml-3">
            3 Currently Hosting
          </div>
          <div>
            <EventSwiper />
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-bold inline-block">Members</h1>
          <div className="badge badge-outline badge-lga ml-3">2.3k Total</div>
          <div className="block">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Name</th>
                    <th>Badge</th>
                    <th>Followers</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <p className="text-primary">98.2</p>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={profile} alt="profile" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            Computer Engineering
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-wrap justify-start">
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
                        <div
                          className="tooltip tooltip-success"
                          data-tip="Sold and Bought 10 items"
                        >
                          <div className="badge badge-success badge-outline mr-1">
                            <FaMedal />
                            &nbsp;PowerUser
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
                      </div>
                    </td>
                    <td>200</td>
                    <th>
                      <button
                        className="block btn btn-ghost btn-xs m-1"
                        onClick={followItem}
                      >
                        Follow for Items
                      </button>
                      <button
                        className="block btn btn-ghost btn-xs m-1"
                        onClick={followEvent}
                      >
                        Follow for Events
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CommunityScreen
