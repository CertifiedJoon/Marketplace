import React from 'react'

function PlaceholderCard() {
  return (
    <>
      <div className="animate-pulse card item-card min-h-content min-w-full">
        <figure>
          <div className="figure-container">
            <div className="figure bg-gray-200"></div>
          </div>
        </figure>
        <div className="py-2 px-0 card-body h-1/2 text-xs">
          <div className="grid grid-cols-3 gap-3 h-20 bg-gray-200">
            <div className="col-span-2 justify-start">
              <div>
                <span className="w-full bg-gray-200"></span>
              </div>
              <div className="w-full my-1 bg-gray-200"></div>
              <div className="w-full my-1 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceholderCard
