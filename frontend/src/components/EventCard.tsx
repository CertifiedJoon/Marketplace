import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LiveEvent } from '../interface/itemInterface'

type Props = {
  event: LiveEvent
}

function EventCard({ event }: Props) {
  return (
    <>
      <div
        className="hero h-full rounded-2xl"
        style={{
          backgroundImage: `url(
          ${event.images[0].image}
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content h-80 relative">
          <div className="max-w-md">
            <p className="mb-5 text-5xl font-bold">{event.heading}</p>
            <Link to={`/item/${event._id}`}>
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
