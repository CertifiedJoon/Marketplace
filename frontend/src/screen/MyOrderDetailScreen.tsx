import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PublicProfile from '../components/PublicProfile'

function OrderDetailScreen() {
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
          Order Detail
        </h3>
      </div>
      {/* Mobile */}
      <div className="md:hidden px-6">
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
            <div className="col-span-1 my-auto">Order ID</div>
          </div>
          <div className="border-b"></div>
        </div>
        <div className="my-3">
          <h1 className="text-lg">Seller Profile</h1>
          <div className="mx-1 my-1 min-h-content">
            <PublicProfile />
          </div>
          <div className="border-b"></div>
        </div>
        <div className="my-3">
          <h1 className="text-lg">Payment Description</h1>
          <div className="border-b"></div>
        </div>
      </div>
    </>
  )
}

export default OrderDetailScreen
