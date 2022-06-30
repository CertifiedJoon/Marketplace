import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import profile from '../static/images/profile.png'
import {
  FaArrowLeft,
  FaHandSparkles,
  FaInfoCircle,
  FaMedal,
  FaPencilAlt,
} from 'react-icons/fa'

function ProfileScreen() {
  const navigate = useNavigate()
  const [editStatus, setEditStatus] = useState(false)
  const saveProfile = () => {
    console.log('Profile Saved')
  }

  const handleClick = () => {
    if (editStatus === false) {
      setEditStatus(true)
    } else if (editStatus === true) {
      saveProfile()
      setEditStatus(false)
    }
  }

  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>

      <div className="md:hidden sticky top-0 bg-white z-50 relative">
        <div className="absolute left-6 top-3">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute right-6 py-2">
          <button
            className="btn btn-ghost rounded-sm btn-xs"
            onClick={handleClick}
          >
            {editStatus ? 'Save' : 'Edit'}
          </button>
        </div>
        <h3 className="font-bold border-b text-center py-2 mx-20">Profile</h3>
      </div>

      {/* Mobile */}
      <div className="md:hidden mx-3">
        <div className="grid grid-cols-3 justify-tiems-stretch mx-auto py-5 border-b border-gray-300">
          <div className="col-span-1 justify-self-end">
            <div className="avatar px-2">
              <div className="w-full max-w-40 rounded-full">
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-cols items-center">
            <div className="grid grid-rows ml-3">
              <input
                type="text"
                placeholder="Name"
                value="Joonyoung Moon"
                className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-xl w-full disabled:text-black disabled:input-ghost disabled:border-none"
                disabled={!editStatus}
                onChange={() => {}}
              />
              <input
                type="text"
                placeholder="E-mail"
                value="marketplace@gmail.com"
                className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                disabled={!editStatus}
                onChange={() => {}}
              />
              <Link to="/edit-password">
                <h3 className="btn btn-ghost btn-outline btn-xs rounded-sm w-2/3 ">
                  Edit Password
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 py-5">
          <label className="text-lg text-gray-500">One word nickname:</label>
          <input
            type="text"
            placeholder="E-mail"
            value="Joon"
            className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent text-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
            disabled={!editStatus}
            onChange={() => {}}
          />
          <label className="text-lg text-gray-500">
            Introduce yourself to your community:
          </label>
          <textarea
            className="p-0 rounded-none textarea textarea-ghost text-accent placeholder-accent w-full text-lg h-60 rounded-sm disabled:text-black disabled:textarea-ghost disabled:border-none"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum lacus id urna aliquam placerat. In ultricies odio non
            interdum molestie. Etiam et volutpat sem. Vivamus ac consequat nunc,
            quis mollis justo. Morbi venenatis ex eu imperdiet tristique.
            Maecenas sollicitudin viverra fringilla. Etiam imperdiet lacinia
            magna, nec porttitor libero tempus et. Nunc eu ligula ac orci
            posuere pellentesque eu eget mauris. Praesent convallis nisi ac urna
            vulputate, eget viverra lectus mattis. Quisque id mi eget magna
            finibus semper ut eget dolor. Sed sodales dignissim magna, id
            feugiat nibh placerat interdum. Nunc nec lacus mollis magna placerat
            laoreet non et mauris."
            placeholder="Describe your listing."
            disabled={!editStatus}
            onChange={() => {}}
          ></textarea>
        </div>
        <div className="py-5">
          <div>
            <label className="text-md text-gray-500">Badge Earned</label>
            <div className="flex mt-2">
              <div
                className="tooltip tooltip-info"
                data-tip="100% Clean Transactions"
              >
                <div className="badge badge-lg badge-info badge-outline mr-3">
                  <FaHandSparkles />
                  &nbsp;Clean
                </div>
              </div>
              <div
                className="tooltip tooltip-success"
                data-tip="Sold and Bought 10 items"
              >
                <div className="badge badge-lg badge-success badge-outline mr-3">
                  <FaMedal />
                  &nbsp;PowerUser
                </div>
              </div>
            </div>
            <label className="text-md text-gray-500">Badge Progress</label>
            <div>
              <div
                className="tooltip tooltip-secondary"
                data-tip="Sold and Bought 10 items"
              >
                <div className="badge badge-secondary badge-outline">
                  <FaMedal />
                  &nbsp;PowerHost
                </div>
              </div>
              <p className="inline ml-3">7 / 10 Events Hosted</p>
              <progress
                className="progress progress-secondary h-4 w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <div
                className="tooltip tooltip-accent"
                data-tip="Sold and Bought 10 items"
              >
                <div className="badge badge-accent badge-outline">
                  <FaMedal />
                  &nbsp;Celebrity
                </div>
              </div>
              <p className="inline ml-3">20 / 100 Peaple Hosted</p>
              <progress
                className="progress progress-accent h-4 w-full"
                value="20"
                max="100"
              ></progress>
            </div>
            <div>
              <div
                className="tooltip tooltip-primary"
                data-tip="Sold and Bought 10 items"
              >
                <div className="badge badge-primary badge-outline">
                  <FaMedal />
                  &nbsp;PowerUser
                </div>
              </div>
              <p className="inline ml-3">10 / 10 Items Sold</p>
              <progress
                className="progress progress-primary h-4 w-full"
                value="100"
                max="100"
              ></progress>
            </div>
            <div>
              <div
                className="tooltip tooltip-info"
                data-tip="Sold and Bought 10 items"
              >
                <div className="badge badge-info badge-outline">
                  <FaMedal />
                  &nbsp;Clean
                </div>
              </div>
              <p className="inline ml-3">102 / 102 Clean Transactions</p>
              <progress
                className="progress progress-info h-4 w-full"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 md:mx-3 hidden md:block">
        <div className="grid grid-cols-3 min-h-content my-5">
          <div className="col-span-1 mr-6 border-r border-gray-300">
            <div className="sticky top-1/2 z-50">
              <div className="flex flex-col justify-center">
                <div>
                  <div className="text-center mt-5">
                    <h1 className="font-bold">Your Profile</h1>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn rounded btn-ghost text-xs"
                      onClick={handleClick}
                    >
                      <FaPencilAlt
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                        }}
                      />
                      &nbsp;{editStatus ? 'Save' : 'Edit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 min-h-screen mx-10">
            <div className="grid grid-cols-3 justify-tiems-stretch mx-auto pb-5 border-b border-gray-300">
              <div className="col-span-1 justify-self-end">
                <div className="avatar">
                  <div className="w-2/3 rounded-full">
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-2 h-full">
                  <div className="self-end">
                    <input
                      type="text"
                      placeholder="Name"
                      value="Joonyoung Moon"
                      className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-2xl w-full disabled:text-black disabled:input-ghost disabled:border-none"
                      disabled={!editStatus}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value="marketplace@gmail.com"
                      className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                      disabled={!editStatus}
                      onChange={() => {}}
                    />
                    <div className="justify-self-end">
                      <Link to="/edit-password">
                        <h3 className="btn btn-ghost btn-xs rounded-sm justify-self-end w-2/3">
                          Edit Password
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 py-5">
              <div className="grid grid-cols-5">
                <div className="col-span-2">
                  <label className="text-lg text-gray-500">
                    One word nickname:
                  </label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    value="Joon"
                    className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent text-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                    disabled={!editStatus}
                    onChange={() => {}}
                  />
                </div>
                <div className="col-span-3"></div>
              </div>

              <label className="text-lg text-gray-500">
                Introduce yourself to your community:
                <div
                  className="tooltip tooltip-info z-30 inline-block ml-5 mt-1"
                  data-tip="Your Introduction must be different for each community"
                >
                  <FaInfoCircle className="text-lg text-info" />
                </div>
              </label>
              <textarea
                className="p-0 textarea textarea-ghost text-accent placeholder-accent w-full text-lg h-60 min-h-content rounded-sm disabled:text-black disabled:textarea-ghost disabled:border-none"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum lacus id urna aliquam placerat. In ultricies odio non
            interdum molestie. Etiam et volutpat sem. Vivamus ac consequat nunc,
            quis mollis justo. Morbi venenatis ex eu imperdiet tristique.
            Maecenas sollicitudin viverra fringilla. Etiam imperdiet lacinia
            magna, nec porttitor libero tempus et. Nunc eu ligula ac orci
            posuere pellentesque eu eget mauris. Praesent convallis nisi ac urna
            vulputate, eget viverra lectus mattis. Quisque id mi eget magna
            finibus semper ut eget dolor. Sed sodales dignissim magna, id
            feugiat nibh placerat interdum. Nunc nec lacus mollis magna placerat
            laoreet non et mauris."
                placeholder="Describe your listing."
                disabled={!editStatus}
                onChange={() => {}}
              ></textarea>
            </div>
            <div className="py-5">
              <div>
                <label className="text-md text-gray-500">Badge Earned</label>
                <div className="flex mt-2">
                  <div
                    className="tooltip tooltip-info"
                    data-tip="100% Clean Transactions"
                  >
                    <div className="badge badge-lg badge-info badge-outline mr-3">
                      <FaHandSparkles />
                      &nbsp;Clean
                    </div>
                  </div>
                  <div
                    className="tooltip tooltip-success"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-lg badge-success badge-outline mr-3">
                      <FaMedal />
                      &nbsp;PowerUser
                    </div>
                  </div>
                </div>
                <label className="text-md text-gray-500">Badge Progress</label>
                <div>
                  <progress
                    className="progress progress-secondary h-4 w-56"
                    value="70"
                    max="100"
                  ></progress>
                  <p className="inline ml-3">7 / 10 Events Hosted</p>
                  <div
                    className="tooltip tooltip-secondary"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-secondary badge-outline ml-3">
                      <FaMedal />
                      &nbsp;PowerHost
                    </div>
                  </div>
                </div>
                <div>
                  <progress
                    className="progress progress-accent h-4 w-56"
                    value="20"
                    max="100"
                  ></progress>
                  <p className="inline ml-3">20 / 100 Peaple Hosted</p>
                  <div
                    className="tooltip tooltip-accent"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-accent badge-outline ml-3">
                      <FaMedal />
                      &nbsp;Celebrity
                    </div>
                  </div>
                </div>
                <div>
                  <progress
                    className="progress progress-primary h-4 w-56"
                    value="100"
                    max="100"
                  ></progress>
                  <p className="inline ml-3">10 / 10 Items Sold</p>
                  <div
                    className="tooltip tooltip-primary"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-primary badge-outline ml-3">
                      <FaMedal />
                      &nbsp;PowerUser
                    </div>
                  </div>
                </div>
                <div>
                  <progress
                    className="progress progress-info h-4 w-56"
                    value="100"
                    max="100"
                  ></progress>
                  <p className="inline ml-3">102 / 102 Clean Transactions</p>
                  <div
                    className="tooltip tooltip-info"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-info badge-outline ml-3">
                      <FaMedal />
                      &nbsp;Clean
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer active="mypage" />
    </>
  )
}

export default ProfileScreen
