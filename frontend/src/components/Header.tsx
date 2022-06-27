import React, { useState, useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  selectCommunityKey,
  selectSaleMode,
  setCommunityKey,
  setSaleMode,
} from '../features/header/headerSlice'
import profile from '../static/images/profile.png'
import SearchBar from './SearchBar'

type Props = {
  sell?: boolean
}

function Header({ sell = false }: Props) {
  // Link Wrapped
  const dispatch = useAppDispatch()
  const saleMode = useAppSelector(selectSaleMode)
  const communityKey = useAppSelector(selectCommunityKey)

  const [selectedKey, setSelectedKey] = useState('All')

  useEffect(() => {
    if (sell) {
      dispatch(setSaleMode(true))
    }
  }, [sell, dispatch])

  const handleCommunityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      dispatch(setCommunityKey(selectedKey))
    }
  }

  const handleCommunitySelect = (selected: string) => {
    setSelectedKey(selected)
  }

  return (
    <div className="sticky top-0 z-50 py-0">
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 bg-white">
        <div className="navbar px-0">
          <div className="flex-1">
            <Link to="/">
              <p
                className={`btn btn-link normal-case text-xl hover:no-underline px-0 ${
                  saleMode ? 'text-secondary' : ''
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
                saleMode ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              HKU
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
              <div className="modal-box h-2/3">
                <h3 className="font-bold text-lg">Jump to another Community</h3>
                <div className="my-1">
                  <SearchBar onChangeFunction={handleCommunitySelect} />
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
                      <Link to="/community/communityId">
                        <button className="btn btn-primary">
                          Explore Community
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/communities/join">
                  <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                    Join A New Community
                  </button>
                </Link>
                <div className="modal-action inline-block absolute right-6 bottom-6">
                  <label htmlFor="my-modal-6" className="btn">
                    Jump
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
                      saleMode ? 'btn-secondary' : 'btn-primary'
                    }`}
                  >
                    {communityKey}
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-7"
                    className="modal-toggle"
                    onChange={(e) => {
                      handleCommunityChange(e)
                    }}
                  />
                  <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box h-2/3">
                      <h3 className="font-bold text-lg">
                        Jump to another Community
                      </h3>
                      <div className="my-1 text-md">
                        <SearchBar onChangeFunction={handleCommunitySelect} />
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
                            <Link to="/community/communityId">
                              <button className="btn btn-primary">
                                Explore Community
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link to="/communities/join">
                        <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                          Join A New Community
                        </button>
                      </Link>
                      <div className="modal-action inline-block absolute right-6 bottom-6">
                        <label htmlFor="my-modal-7" className="btn">
                          Jump
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
                  {saleMode ? "I'm Selling!" : "I'm Buying!"}
                  <FaCaretDown />
                </p>
                <ul className="bg-transparent dropdown-content w-full p-2">
                  <li className="rounded">
                    <button
                      className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-primary focus:btn-primary text-xs"
                      onClick={() => dispatch(setSaleMode(false))}
                    >
                      I'm Buying!
                    </button>
                  </li>
                  <li className="rounded">
                    <button
                      className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-secondary focus:btn-secondary text-xs"
                      onClick={() => dispatch(setSaleMode(true))}
                    >
                      I'm Selling!
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <div className="w-20">
                  <Link to="/mypage">
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
