import React, { useState, useEffect } from 'react'
import { FaCaretDown, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  selectCommunityKey,
  selectSaleMode,
  setCommunityKey,
  setCommunityId,
  setSaleMode,
} from '../features/header/headerSlice'
import { selectUser } from '../features/user/userSlice'
import { selectUserImage } from '../features/user/userProfileSlice'
import profile from '../static/images/profile.png'
import SearchBar from './SearchBar'
import { CommunityBrief } from '../interface/communityInterface'
import { selectMemberships } from '../features/community/membershipSlice'

type Props = {
  sell?: boolean
}

function Header({ sell = false }: Props) {
  // Link Wrapped
  const dispatch = useAppDispatch()
  const saleMode = useAppSelector(selectSaleMode)
  const communityKey = useAppSelector(selectCommunityKey)
  const user = useAppSelector(selectUser)
  const profile_image = useAppSelector(selectUserImage)
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityBrief>({
    _id: '0',
    key: 'ALL',
    name: 'All of your communities.',
    thumbnail_image: '/community/placeholder.jpg',
  })

  useEffect(() => {
    if (sell) {
      dispatch(setSaleMode(true))
    }
  }, [sell, dispatch])

  const handleCommunityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      dispatch(setCommunityKey(selectedCommunity.key))
      dispatch(setCommunityId(selectedCommunity._id))
    }
  }
  const memberships = useAppSelector(selectMemberships)
  const handleCommunitySelect = (community: { key: string; _id: string }) => {
    const selected = memberships.find(
      (membership) => membership.community._id === community._id
    )
    setSelectedCommunity({
      _id: selected?.community._id ?? '0',
      key: selected?.community.key ?? 'ALL',
      name: selected?.community.name ?? 'All of your communities',
      thumbnail_image:
        selected?.community.thumbnail_image ?? '/community/placeholder.jpg',
    })
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
              htmlFor="header-modal-mobile"
              className={`btn modal-button btn-xs text-white ${
                saleMode ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              {communityKey}
            </label>

            <input
              type="checkbox"
              id="header-modal-mobile"
              className="modal-toggle"
              onChange={(e) => {
                handleCommunityChange(e)
              }}
            />
            <div className="modal modal-bottom sm:modal-middle ">
              <div className="modal-box h-2/3">
                <h3 className="font-bold text-lg">Jump to another Community</h3>
                <div className="my-1 text-md">
                  <SearchBar
                    defaultOpen={false}
                    onChangeFunction={handleCommunitySelect}
                  />
                </div>
                <div
                  className="hero h-2/3 rounded-2xl"
                  style={{
                    backgroundImage: `url(${selectedCommunity.thumbnail_image})`,
                  }}
                >
                  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">
                        {selectedCommunity.key}
                      </h1>
                      <p className="mb-5 text-lg">{selectedCommunity.name}</p>
                      <Link to={`/community/${selectedCommunity._id}`}>
                        <button className="btn btn-primary">
                          Explore Community
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/community/join">
                  <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                    Join A New Community
                  </button>
                </Link>
                <div className="modal-action inline-block absolute right-6 bottom-6">
                  <label htmlFor="header-modal-mobile" className="btn">
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
                    htmlFor="header-modal"
                    className={`btn modal-button btn-xs text-white ${
                      saleMode ? 'btn-secondary' : 'btn-primary'
                    }`}
                  >
                    {communityKey}
                  </label>

                  <input
                    type="checkbox"
                    id="header-modal"
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
                        <SearchBar
                          defaultOpen={false}
                          onChangeFunction={handleCommunitySelect}
                        />
                      </div>
                      <div
                        className="hero h-2/3 rounded-2xl"
                        style={{
                          backgroundImage: `url(${selectedCommunity.thumbnail_image})`,
                        }}
                      >
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                          <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                              {selectedCommunity.key}
                            </h1>
                            <p className="mb-5 text-lg">
                              {selectedCommunity.name}
                            </p>
                            <Link to={`/community/${selectedCommunity._id}`}>
                              <button className="btn btn-primary">
                                Explore Community
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link to="/community/join">
                        <button className="btn btn-accent inline-block absolute left-6 bottom-6">
                          Join A New Community
                        </button>
                      </Link>
                      <div className="modal-action inline-block absolute right-6 bottom-6">
                        <label htmlFor="header-modal" className="btn">
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
                  {saleMode
                    ? "I'm Selling & Hosting!"
                    : "I'm Buying & Joining!"}
                  <FaCaretDown />
                </p>
                <ul className="bg-transparent dropdown-content w-full p-2">
                  <li className="rounded">
                    <button
                      className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-primary focus:btn-primary text-xs"
                      onClick={() => dispatch(setSaleMode(false))}
                    >
                      I'm Buying & Joining!
                    </button>
                  </li>
                  <li className="rounded">
                    <button
                      className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-secondary focus:btn-secondary text-xs"
                      onClick={() => dispatch(setSaleMode(true))}
                    >
                      I'm Selling & Hosting!
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <div className="w-20">
                  {user ? (
                    <Link to="/mypage">
                      <img
                        className="mask mask-squircle"
                        src={profile_image}
                        alt="profile"
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      &nbsp; <span className="text-xs">Login</span>
                    </Link>
                  )}
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
