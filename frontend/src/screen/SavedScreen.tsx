import React, { useState, useEffect } from 'react'
import { FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import Footer from '../components/Footer'
import Header from '../components/Header'
import profile from '../static/images/profile.png'

function SavedScreen() {
  const [copySuccess, setCopySuccess] = useState(false)

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
  }

  useEffect(() => {
    if (copySuccess === true) toast.success('Link copied.')
  }, [copySuccess])
  return (
    <>
      <Header />

      {/* Mobile */}
      <div className="md:hidden">
        <div className="card w-full my-10">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="mask mask-hexagon"
            />
          </figure>
          <div className="card-body">
            <div>
              <h1 className="text-2xl font-bold">Item Heading</h1>
              <p className="pb-6">
                Item Description: Provident cupiditate voluptatem et in. Quaerat
                fugiat ut assumenda excepturi exercitationem quasi. In deleniti
                eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Chat & Buy</button>
            </div>
          </div>
        </div>
        <div className="card w-full my-10">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="mask mask-hexagon"
            />
          </figure>
          <div className="card-body">
            <div>
              <h1 className="text-2xl font-bold">Item Heading</h1>
              <p className="pb-6">
                Item Description: Provident cupiditate voluptatem et in. Quaerat
                fugiat ut assumenda excepturi exercitationem quasi. In deleniti
                eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Chat & Buy</button>
            </div>
          </div>
        </div>
        <div className="card w-full my-10">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="mask mask-hexagon"
            />
          </figure>
          <div className="card-body">
            <div>
              <h1 className="text-2xl font-bold">Event Heading</h1>
              <p className="pb-6">
                Event Description: Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 md:mx-3 hidden md:block">
        <div className="grid grid-cols-3 min-h-content my-5">
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
                    <h1 className="font-bold">Joon's Wishlist</h1>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn rounded btn-ghost text-xs"
                      onClick={handleShare}
                    >
                      <FaShare
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                        }}
                      />
                      &nbsp;Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="hero min-h-content">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://api.lorem.space/image/movie?w=800&h=1400"
                  className="mask mask-hexagon max-w-xs rounded-lg shadow-2xl"
                  alt="img"
                />
                <div>
                  <h1 className="text-5xl font-bold">Item Heading</h1>
                  <p className="py-6">
                    Item Description: Provident cupiditate voluptatem et in.
                    Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Chat & Buy</button>
                </div>
              </div>
            </div>
            <div className="hero min-h-content">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="mask mask-hexagon max-w-xs rounded-lg shadow-2xl"
                  alt="img"
                />
                <div>
                  <h1 className="text-5xl font-bold">Item Heading</h1>
                  <p className="py-6">
                    Item Description: Provident cupiditate voluptatem et in.
                    Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Chat and Buy</button>
                </div>
              </div>
            </div>
            <div className="hero min-h-content">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="mask mask-hexagon max-w-xs rounded-lg shadow-2xl"
                  alt="img"
                />
                <div>
                  <h1 className="text-5xl font-bold">Event Heading</h1>
                  <p className="py-6">
                    Event description: Provident cupiditate voluptatem et in.
                    Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Join</button>
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

export default SavedScreen
