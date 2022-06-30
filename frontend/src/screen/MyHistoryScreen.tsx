import React from 'react'
import { FaArrowLeft, FaHistory } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import profile from '../static/images/profile.png'

type Props = {
  sell?: boolean
}

function HistoryScreen({ sell = false }: Props) {
  const itemName = 'Item Name Random Item Name Item Name'
  const navigate = useNavigate()
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>

      <div className="md:hidden sticky top-0 bg-white z-50 relative">
        <div className="absolute left-6 top-3">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        </div>
        <h3 className="font-bold border-b text-center py-2 mx-20">
          {sell ? 'Sale History' : 'Purchase History'}
        </h3>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="min-h-screen px-6">
          <div>
            <div className="grid grid-cols-5 my-3">
              <div className="col-span-1">
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt=""
                  className="mask mask-squircle w-20"
                />
              </div>
              <div className="col-span-3 pl-3 pt-1">
                <p className="text-lg truncate">Item Heading</p>
                <p className="text-sm text-gray-500">DD/MM/YYYY</p>
                <p className="text-sm">$Price</p>
              </div>
              <div className="col-span-1 my-auto">
                <Link to="/order/orderId">
                  <button className="btn btn-ghost rounded-sm mr-3">
                    Order Detail
                  </button>
                </Link>
              </div>
            </div>
            <div className="mx-20 border-b"></div>
          </div>
          <div>
            <div className="grid grid-cols-5 h-20 my-3">
              <div className="col-span-1">
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt=""
                  className="mask mask-squircle w-20"
                />
              </div>
              <div className="col-span-3 pl-3 pt-1">
                <p className="text-lg truncate">Item Heading</p>
                <p className="text-sm text-gray-500">DD/MM/YYYY</p>
                <p className="text-sm">$Price</p>
              </div>
              <div className="col-span-1 my-auto">
                <Link to="/order/orderId">
                  <button className="btn btn-ghost rounded-sm mr-3">
                    Order Detail
                  </button>
                </Link>
              </div>
            </div>
            <div className="mx-20 border-b"></div>
          </div>
        </div>
      </div>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 md:mx-3 md:block hidden">
        <div className="grid grid-cols-3 min-h-screen my-5">
          <div className="col-span-1 mr-6 border-r border-gray-300">
            <div className="sticky top-1/3 z-50">
              <div className="flex flex-col justify-center">
                <div>
                  <Link to="/profile">
                    <div className="avatar flex items-center">
                      <div className="w-32 rounded-full mx-auto">
                        <img src={profile} alt="img" />
                      </div>
                    </div>
                  </Link>
                  <div className="text-center mt-5">
                    <h1 className="font-bold">
                      {sell ? 'Sale' : 'Purchase'} History
                    </h1>
                  </div>
                  <div className="text-center">
                    <button className="btn rounded btn-ghost no-animation text-xs">
                      <FaHistory
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                        }}
                      />
                      &nbsp;History lasts for a year
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>{sell ? 'Sale Date' : 'Purchase Date'}</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://api.lorem.space/image/movie?w=800&h=800"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold hidden lg:block">
                            {itemName.length > 25
                              ? `${itemName.substring(0, 25)}...`
                              : itemName}
                          </div>
                          <div className="font-bold hidden md:block lg:hidden">
                            {itemName.length > 10
                              ? `${itemName.substring(0, 10)}...`
                              : itemName}
                          </div>
                          <div className="text-sm opacity-50">
                            Community Key
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      DD/MM/YYYY
                      <br />
                      <span className="badge badge-ghost badge-sm">Cash</span>
                    </td>
                    <td>$Price</td>
                    <th>
                      <Link to="/order/orderId">
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </Link>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer active="mypage" />
    </>
  )
}

export default HistoryScreen
