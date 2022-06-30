import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaMedal, FaHandSparkles } from 'react-icons/fa'

import Profile from '../static/images/profile.png'
import { Link } from 'react-router-dom'
function MyPageScreen() {
  /*
    Frontend Worklist:
    1. Link Wrap [Done]
    2. Profile data pulled from a user state (redux)
  */
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="md:mx-auto md:w-1/3 mx-6">
        <div className="grid grid-rows-6 divide-y divide-gray-300 justify-items-stretch">
          <div className="row-span-1 py-6">
            <div className="grid grid-cols-3 justify-tiems-stretch">
              <div className="col-span-1 justify-self-end">
                <div className="avatar">
                  <div className="w-2/3 rounded-full">
                    <img src={Profile} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-2 h-full">
                  <div className="self-end">
                    <h3 className="text-xl lg:text-2xl">Joonyoung Moon</h3>
                  </div>
                  <div className="self-end lg:self-center">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-4">
            <div className="grid grid-rows-10 h-2/3 mx-3 divide-y divide-gray-300">
              <div className="pt-3 row-spwn-4">
                <label className="text-sm text-gray-500">Your Record</label>
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
              <div className="row-span-6 my-3">
                <ul className="menu bg-base-100 rounded-box w-full my-3">
                  <li>
                    <Link to="/profile">
                      <div>Profile</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/messages">
                      <div>Messages</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist/userId">
                      <div>Wishlist</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/purchase-history">
                      <div>Purchase History</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sale-history">
                      <div>Sale History</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/community/my-communities">
                      <div>Communities</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-method">
                      <div>Payment Method</div>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/settings">
                      <div>Settings</div>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyPageScreen
