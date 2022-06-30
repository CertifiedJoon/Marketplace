import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEllipsisH } from 'react-icons/fa'

import mcSvg from '../static/images/mc_symbol.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PaymentMethodScreen() {
  const navigate = useNavigate()
  const [editStatus, setEditStatus] = useState(false)

  const saveProfile = () => {
    console.log('Profile Saved')
  }

  //eslint-disable-next-line
  const handleClick = () => {
    if (editStatus === false) {
      setEditStatus(true)
    } else if (editStatus === true) {
      saveProfile()
      setEditStatus(false)
    }
  }

  const setDefaultMethod = () => {
    console.log('Default Cart Changed')
  }

  const removeMethod = () => {
    console.log('Payment Method Removed')
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
        <h3 className="font-bold border-b text-center py-2 mx-20">
          Payment Information
        </h3>
      </div>

      {/* Mobile */}
      <div className="md:hidden min-h-screen mx-3 divide-y divide-gray-300">
        <div className="py-10">
          <h1 className=" font-bold">Payment Methods</h1>
          <h3 className="text-gray-500">Choose how you would like to pay.</h3>
          <div className="mx-3 divide-y divide-gray-300">
            <div className="grid h-16 grid-cols-6 mx-3 py-3">
              <div className="col-span-1 h-12">
                <img src={mcSvg} alt="mastercard" />
              </div>
              <div className="col-span-4 ml-3">
                <p className="text-gray-500">MasterCard **** 7938</p>
                <div className="badge badge-info badge-sm badge-outline rounded-sm">
                  Default
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={3}
                    className="btn btn-sm btn-ghost btn-circle"
                  >
                    <FaEllipsisH />
                  </label>
                  <ul
                    tabIndex={3}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={removeMethod}
                      >
                        Remove
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={setDefaultMethod}
                      >
                        Set Default
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid h-16 grid-cols-6 mx-3 py-3">
              <div className="flex items-center col-span-1 h-12">
                <img src={mcSvg} alt="mastercard" />
              </div>
              <div className="col-span-4 ml-3">
                <p className="text-gray-500">MasterCard **** 7938</p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={4}
                    className="btn btn-ghost btn-sm btn-circle"
                  >
                    <FaEllipsisH />
                  </label>
                  <ul
                    tabIndex={4}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={removeMethod}
                      >
                        Remove
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={setDefaultMethod}
                      >
                        Set Default
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-3">
              <label
                htmlFor="mobile-payment-method-modal"
                className="my-2 btn btn-outline btn-sm btn-block modal-button"
              >
                Add Payment Method
              </label>
              <input
                type="checkbox"
                id="mobile-payment-method-modal"
                className="modal-toggle"
              />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-gray-500">
                    Fill in Card Details
                  </h3>
                  <p>Stripe Component to be Added.</p>
                  <div className="modal-action">
                    <label
                      htmlFor="mobile-payment-method-modal"
                      className="btn"
                    >
                      Add
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="font-bold">Payout Methods</h1>
          <h3 className="text-gray-500">
            Choose how you would like to be paid.
          </h3>
          <div className="mx-3 divide-y divide-gray-300">
            <div className="grid h-16 grid-cols-6 mx-3 py-3">
              <div className="col-span-1 h-12">
                <img src={mcSvg} alt="mastercard" />
              </div>
              <div className="col-span-4 ml-3">
                <p className="text-gray-500">MasterCard **** 7938</p>
                <div className="badge badge-info badge-sm badge-outline rounded-sm">
                  Default
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={3}
                    className="btn btn-sm btn-ghost btn-circle"
                  >
                    <FaEllipsisH />
                  </label>
                  <ul
                    tabIndex={3}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={removeMethod}
                      >
                        Remove
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={setDefaultMethod}
                      >
                        Set Default
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid h-16 grid-cols-6 mx-3 py-3">
              <div className="flex items-center col-span-1 h-12">
                <img src={mcSvg} alt="mastercard" />
              </div>
              <div className="col-span-4 ml-3">
                <p className="text-gray-500">MasterCard **** 7938</p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={4}
                    className="btn btn-ghost btn-sm btn-circle"
                  >
                    <FaEllipsisH />
                  </label>
                  <ul
                    tabIndex={4}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={removeMethod}
                      >
                        Remove
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-ghost w-full h-full rounded-xl"
                        onClick={setDefaultMethod}
                      >
                        Set Default
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-3">
              <label
                htmlFor="mobile-payout-method-modal"
                className="my-2 btn btn-outline btn-sm btn-block modal-button"
              >
                Set Payout Method
              </label>
              <input
                type="checkbox"
                id="mobile-payout-method-modal"
                className="modal-toggle"
              />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-gray-500">
                    Fill in Card Details
                  </h3>
                  <p>Stripe Component to be Added.</p>
                  <div className="modal-action">
                    <label htmlFor="mobile-payout-method-modal" className="btn">
                      Add
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 hidden md:block">
        <div className="grid grid-cols-3 min-h-content my-5">
          <div className="col-span-1 mr-6 border-r border-gray-300">
            <div className="sticky top-1/2 z-50">
              <div className="flex flex-col justify-center">
                <div>
                  <div className="text-center mt-5">
                    <h1 className="font-bold">Payment / Payout</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 min-h-screen mx-10">
            <div className="py-10">
              <h1 className=" font-bold">Payment Methods</h1>
              <h3 className="text-gray-500">
                Choose how you would like to pay.
              </h3>
              <div className="mx-3 divide-y divide-gray-300">
                <div className="grid h-16 grid-cols-6 mx-3 py-3">
                  <div className="col-span-1 h-12">
                    <img src={mcSvg} alt="mastercard" />
                  </div>
                  <div className="col-span-4 ml-3">
                    <p className="text-gray-500">MasterCard **** 7938</p>
                    <div className="badge badge-info badge-sm badge-outline rounded-sm">
                      Default
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={3}
                        className="btn btn-sm btn-ghost btn-circle"
                      >
                        <FaEllipsisH />
                      </label>
                      <ul
                        tabIndex={3}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={removeMethod}
                          >
                            Remove
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={setDefaultMethod}
                          >
                            Set Default
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid h-16 grid-cols-6 mx-3 py-3">
                  <div className="flex items-center col-span-1 h-12">
                    <img src={mcSvg} alt="mastercard" />
                  </div>
                  <div className="col-span-4 ml-3">
                    <p className="text-gray-500">MasterCard **** 7938</p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={4}
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        <FaEllipsisH />
                      </label>
                      <ul
                        tabIndex={4}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={removeMethod}
                          >
                            Remove
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={setDefaultMethod}
                          >
                            Set Default
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mx-3">
                  <label
                    htmlFor="payment-method-modal"
                    className="my-2 btn btn-outline btn-sm btn-block modal-button"
                  >
                    Add Payment Method
                  </label>
                  <input
                    type="checkbox"
                    id="payment-method-modal"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-gray-500">
                        Fill in Card Details
                      </h3>
                      <p>Stripe Component to be Added.</p>
                      <div className="modal-action">
                        <label htmlFor="payment-method-modal" className="btn">
                          Add
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <h1 className="font-bold">Payout Methods</h1>
              <h3 className="text-gray-500">
                Choose how you would like to be paid.
              </h3>
              <div className="mx-3 divide-y divide-gray-300">
                <div className="grid h-16 grid-cols-6 mx-3 py-3">
                  <div className="col-span-1 h-12">
                    <img src={mcSvg} alt="mastercard" />
                  </div>
                  <div className="col-span-4 ml-3">
                    <p className="text-gray-500">MasterCard **** 7938</p>
                    <div className="badge badge-info badge-sm badge-outline rounded-sm">
                      Default
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={3}
                        className="btn btn-sm btn-ghost btn-circle"
                      >
                        <FaEllipsisH />
                      </label>
                      <ul
                        tabIndex={3}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={removeMethod}
                          >
                            Remove
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={setDefaultMethod}
                          >
                            Set Default
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid h-16 grid-cols-6 mx-3 py-3">
                  <div className="flex items-center col-span-1 h-12">
                    <img src={mcSvg} alt="mastercard" />
                  </div>
                  <div className="col-span-4 ml-3">
                    <p className="text-gray-500">MasterCard **** 7938</p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={4}
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        <FaEllipsisH />
                      </label>
                      <ul
                        tabIndex={4}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={removeMethod}
                          >
                            Remove
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-ghost w-full h-full rounded-xl"
                            onClick={setDefaultMethod}
                          >
                            Set Default
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mx-3">
                  <label
                    htmlFor="payout-method-modal"
                    className="my-2 btn btn-outline btn-sm btn-block modal-button"
                  >
                    Set Payout Method
                  </label>
                  <input
                    type="checkbox"
                    id="payout-method-modal"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-gray-500">
                        Fill in Card Details
                      </h3>
                      <p>Stripe Component to be Added.</p>
                      <div className="modal-action">
                        <label htmlFor="payout-method-modal" className="btn">
                          Add
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentMethodScreen
