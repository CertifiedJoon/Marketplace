import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profile from '../static/images/profile.png'
import SearchBar from './SearchBar'

type Props = {
  sell?: boolean
}

function Header({ sell = false }: Props) {
  // Link Wrapped
  return (
    <div className="sticky top-0 z-50 py-0">
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 bg-white">
        <div className="navbar px-0">
          <div className="flex-1">
            <Link to="/">
              <p
                className={`btn btn-link normal-case text-xl hover:no-underline px-0 ${
                  sell ? 'text-secondary' : ''
                }`}
              >
                Marketplace
              </p>
            </Link>
          </div>
          <div className="show md:hidden">
            <label
              htmlFor="my-modal-6"
              className={`btn modal-button btn-xs text-white ${
                sell ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              HKU
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
              <div className="modal-box h-2/3">
                <h3 className="font-bold text-lg">Join A Community!</h3>
                <div className="my-1">
                  <SearchBar />
                </div>
                <div
                  className="hero h-2/3 rounded-2xl"
                  style={{
                    backgroundImage: `url(
            'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg'
          )`,
                  }}
                >
                  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">HKU</h1>
                      <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                      </p>
                      <button className="btn btn-primary">
                        Explore Community
                      </button>
                    </div>
                  </div>
                </div>
                <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                  Join
                </button>
                <div className="modal-action inline-block absolute right-6 bottom-6">
                  <label htmlFor="my-modal-6" className="btn">
                    Done
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block flex-non">
            <ul className="menu menu-horizontal rounded-box">
              <li>
                <div className="w-full text-xs">
                  <label
                    htmlFor="my-modal-7"
                    className={`btn modal-button btn-xs text-white ${
                      sell ? 'btn-secondary' : 'btn-primary'
                    }`}
                  >
                    HKU
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-7"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box h-2/3">
                      <h3 className="font-bold text-lg">Join A Community!</h3>
                      <div className="my-1 text-md">
                        <SearchBar />
                      </div>
                      <div
                        className="hero h-2/3 rounded-2xl"
                        style={{
                          backgroundImage: `url(
            'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg'
          )`,
                        }}
                      >
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                          <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">HKU</h1>
                            <p className="mb-5">
                              Provident cupiditate voluptatem et in. Quaerat
                              fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id
                              nisi.
                            </p>
                            <button className="btn btn-primary">
                              Explore Community
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                        Join
                      </button>
                      <div className="modal-action inline-block absolute right-6 bottom-6">
                        <label htmlFor="my-modal-7" className="btn">
                          Done
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/userId/message">
                  <p className="w-full text-xs">Messages</p>
                </Link>
              </li>
              <li tab-index="0">
                <p className="text-xs">
                  I'm Buying!
                  <FaCaretDown />
                </p>
                <ul className="bg-transparent dropdown-content w-full p-2">
                  <li className="rounded">
                    <button className="z-10 bg-white btn btn-active btn-primary hover:bg-white active:btn-primary focus:btn-primary text-xs active">
                      I'm Buying!
                    </button>
                  </li>
                  <li className="rounded">
                    <button className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-secondary focus:btn-secondary text-xs">
                      I'm Selling!
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <div className="w-20">
                  <Link to="/profile">
                    <img
                      className="mask mask-squircle"
                      src={profile}
                      alt="profile"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="header-divider" />
    </div>
  )
}

export default Header
