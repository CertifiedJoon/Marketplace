import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function EventCard() {
  return (
    <>
      <div
        className="hero h-full rounded-2xl"
        style={{
          backgroundImage: `url(
          'https://api.lorem.space/image/drink?w=150&h=150'
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content h-80 relative">
          <div className="max-w-md">
            <p className="mb-5 text-5xl font-bold">2022 HighTable</p>
            <Link to="/eventId">
              <button className="btn glass btn-sm">Find out more</button>
            </Link>
          </div>
          <div className="absolute top-1 right-1 badge badge-error badge-outline">
            <FaCircle className="text-xs" />
            &nbsp; Live
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
