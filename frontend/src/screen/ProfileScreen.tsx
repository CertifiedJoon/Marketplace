import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaMedal, FaHandSparkles } from 'react-icons/fa'

import Profile from '../static/images/profile.png'
function ProfileScreen() {
  return (
    <>
      <Header />
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
                    <div>Profile</div>
                  </li>
                  <li>
                    <div>Messages</div>
                  </li>
                  <li>
                    <div>Purchase History</div>
                  </li>
                  <li>
                    <div>Sales History</div>
                  </li>
                  <li>
                    <div>Communities</div>
                  </li>
                  <li>
                    <div>Settings</div>
                  </li>
                  <li>
                    <div>Verify Identity</div>
                  </li>
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

export default ProfileScreen
