import React from 'react'
import { FaSearch, FaHeart, FaInbox, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="sticky bottom-0 z-40 border-t bg-white">
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 md:hidden">
        <div className="grid grid-cols-4">
          <Link to="/">
            <div className="card py-1">
              <figure>
                <FaSearch
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: '#54bab9',
                  }}
                />
              </figure>
              <div className="card-body py-0 px-1 text-xs text-center">
                Explore
              </div>
            </div>
          </Link>
          <Link to="/wishlist/userId">
            <div className="card py-1">
              <figure>
                <FaHeart
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: '#D0C9C0',
                  }}
                />
              </figure>
              <div className="card-body py-0 px-1 text-xs text-center">
                Likes
              </div>
            </div>
          </Link>
          <Link to="/messages">
            <div className="card py-1">
              <figure>
                <FaInbox
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: '#D0C9C0',
                  }}
                />
              </figure>
              <div className="card-body py-0 px-1 text-xs text-center">
                Chats
              </div>
            </div>
          </Link>
          <Link to="/mypage">
            <div className="card py-1">
              <figure>
                <FaUser
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: '#D0C9C0',
                  }}
                />
              </figure>
              <div className="card-body py-0 px-1 text-xs text-center">
                My Page
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 bg-white hidden md:block">
        <div className="grid grid-cols-3">
          <div className="col-span-2 text-gray-500">
            &copy; Marketplace 2022 &middot;
            <p className="inline">
              {' '}
              <Link to="/terms">Terms</Link>{' '}
            </p>
            &middot;
            <p className="inline">
              {' '}
              <Link to="/privacy">Privacy</Link>
            </p>
          </div>
          <div className="col-span-1 flex justify-end text-gray-500">
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
