import React from 'react'
import { FaHandSparkles, FaMedal } from 'react-icons/fa'

function PublicProfile() {
  const followEvent = () => {
    console.log('Event followed')
  }

  const followItem = () => {
    console.log('Item followed')
  }

  return (
    <div className="w-full">
      <div className="flex stats shadow  mt-2">
        <div className="stat place-items-center">
          <div className="stat-title">Clean Purchase</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">100% of Purchases</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Clean Sale</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc">100% of Sales</div>
        </div>
      </div>
      <div className="my-3 rounded rounded-2xl bg-base-100 shadow min-h-content">
        <div className="w-full h-full rounded-2xl p-3 bg-base-200">
          <p className="mb-1 text-sm text-black font-bold">Joonyoung Moon</p>
          <p className="mb-1 text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices magna quis mollis pellentesque. Cras vehicula vitae purus
            sit amet mollis. Integer posuere a ex vel lacinia. Mauris urna ante,
            tempor sed neque at, egestas rhoncus justo. Sed et faucibus.
          </p>
          <p className="mb-1 text-xs text-gray-500">Joined: DD/MM/YYYY</p>
          <div className="flex justify-center mt-4">
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
      <div className="my-3 flex rounded rounded-2xl shadow min-h-content">
        <button className="grow btn btn-ghost btn-xs m-1" onClick={followItem}>
          Follow for Items
        </button>
        <button className="grow btn btn-ghost btn-xs m-1" onClick={followEvent}>
          Follow for Events
        </button>
      </div>
    </div>
  )
}

export default PublicProfile
