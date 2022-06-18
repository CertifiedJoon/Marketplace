import React from 'react'
import { FaApple } from 'react-icons/fa'
import googleIcon from '../static/images/google.png'

function SignupScreen() {
  return (
    <>
      <div className="lg:mx-auto lg:w-1/3 ">
        <div className="h-screen grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="row-span-2 text-center my-auto grid grid-rows-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-accent input-md rounded-t-xl rounded-b-none w-2/3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered border-t-0 input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
              />
            </div>
            <div className="text-center mt-1">
              <button className="btn w-2/3 btn-block btn-sm btn-accent">
                Sign Up
              </button>
            </div>
          </div>
          <div className="text-center mb-auto">
            <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
              <div className="grid grid-cols-4 justify-items-stretch items-center">
                <div className="col-span-1 justify-self-start">
                  <img src={googleIcon} alt="" className="w-6" />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Sign Up with Google</p>
                </div>
              </div>
            </button>
            <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
              <div className="grid grid-cols-4 justify-items-stretch items-center text-white">
                <div className="col-span-1 text-xl justify-self-start">
                  <FaApple />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Sign Up with Apple ID</p>
                </div>
              </div>
            </button>
          </div>
          <div className="text-center my-auto text-gray-500 underline">
            Back to login
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupScreen
