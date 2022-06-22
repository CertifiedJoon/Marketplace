import React from 'react'
import { FaApple, FaAt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import googleIcon from '../static/images/google.png'
function LoginScreen() {
  /* 
  Frontend Worklist 
    1. Store login data to a user state (redux)
    2. Link Wrap [Done]
  */
  return (
    <>
      {/* Tablet or bigger */}
      <div className="hidden lg:block mx-auto w-1/3 ">
        <div className="h-screen grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="text-center my-auto grid grid-rows-2">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered border-b-0 input-accent input-md rounded-t-xl rounded-b-none w-2/3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn w-2/3 btn-block btn-accent">Login</button>
            <p className="text-center text-gray-500 mt-2">
              <span className="underline">
                <Link to="/reset-password">Can't Login</Link>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="text-center mb-auto">
            <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
              <div className="grid grid-cols-4 justify-items-stretch items-center">
                <div className="col-span-1 justify-self-start">
                  <img src={googleIcon} alt="" className="w-6" />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Login with Google</p>
                </div>
              </div>
            </button>
            <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
              <div className="grid grid-cols-4 justify-items-stretch items-center text-white">
                <div className="col-span-1 text-xl justify-self-start">
                  <FaApple />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Login with Apple ID</p>
                </div>
              </div>
            </button>
          </div>
          <div className="text-center my-auto text-gray-500 underline">
            <Link to="/">Continue without login</Link>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden h-screen grid grid-rows-6 justify-items-stretch">
        <div></div>
        <div className="text-center my-auto">
          <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
          <h3 className="text-gray-500">
            A community based second-hand market.
          </h3>
        </div>
        <div className="text-center mb-auto">
          <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
            <div className="grid grid-cols-4 justify-items-stretch items-center">
              <div className="col-span-1 justify-self-start">
                <img src={googleIcon} alt="" className="w-6" />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Google</p>
              </div>
            </div>
          </button>
          <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
            <div className="grid grid-cols-4 justify-items-stretch items-center text-white">
              <div className="col-span-1 text-xl justify-self-start">
                <FaApple />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Apple ID</p>
              </div>
            </div>
          </button>
          <button className="btn w-2/3 btn-block btn-outline btn-secondary btn-sm">
            <div className="grid grid-cols-4 justify-items-stretch items-center">
              <div className="col-span-1 text-xl justify-self-start">
                <FaAt />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Email ID</p>
              </div>
            </div>
          </button>
        </div>
        <div className="text-center text-gray-300">
          <Link to="/reset-password">Can't login?</Link>
        </div>
        <div className="mx-auto">
          <Link to="/signup">
            <button className="btn glass">Sign Up</button>
          </Link>
        </div>
        <div className="text-center my-auto text-gray-500 underline">
          <Link to="/">Continue without login</Link>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
